import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import axios from 'axios';
import styles from './photos.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.findPhotos = this.findPhotos.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  findPhotos(id) {
    axios.get('/photos', {
      params: {id: id}
    }).
    then((photos) => {
      this.setState({'photos': photos.data.photos});
    }).
    catch((error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    let id = window.location.href.split("/").pop().substring(4) || '1'; //Grabs params from url 
    this.findPhotos(id);
  }

  render() {
    return (
      <div>
        <div className={styles.app}>
        <Gallery photos={this.state.photos} 
          onClick={this.openLightbox} 
          columns={Math.ceil(this.state.photos.length/2)} //Makes enough columns so there will be always be two rows
        />
        <Lightbox images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          showImageCount={true}
          theme={{ //Use this to modify the css stlyings of the lightbox *remember camelcase!*
            footer: {
              fontFamily: 'Arial'
            },
            footerCount:{ //Replaces footer count with a flag icon
              backgroundImage: 'url("http://res.cloudinary.com/hallam/image/upload/v1519924638/flag.png")',
              backgroundSize: 'cover',
              width:'20px',
              height:'20px',
              fontSize: '0'
            }
          }}
        />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));