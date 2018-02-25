import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import axios from 'axios';

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



  componentDidMount(){
    this.setState({photos: [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: 'Just a caption.' },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
      { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
      ]});
  }

  render() {
    return (
      <div>
        <div className="test">
        <Gallery photos={this.state.photos} onClick={this.openLightbox} columns={5}/>
        <Lightbox images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          showImageCount={false}
        />
      </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));