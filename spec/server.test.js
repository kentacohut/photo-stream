const request = require('supertest');
const server = require('../server/index.js');

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
      const response = await request(server).get('/');
      expect(response.statusCode).toBe(200);
  });
})

describe('Test the photos path', () => {
  test('It should respond to /photos GET method', async () => {
      const response = await request(server).get('/photos');
      expect(response.statusCode).toBe(200);
  });
})
