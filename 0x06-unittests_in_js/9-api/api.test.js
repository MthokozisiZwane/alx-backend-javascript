const request = require('supertest');
const app = require('../app');

describe('Integration Testing', () => {
  describe('GET /cart/:id', () => {
    it('Responds with 200 and correct message for valid cart ID', async () => {
      const response = await request(app).get('/cart/12');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Payment methods for cart 12');
    });

    it('Responds with 404 for non-numeric cart ID', async () => {
      const response = await request(app).get('/cart/hello');
      expect(response.status).toBe(404);
    });

    it('Responds with 404 for invalid route', async () => {
      const response = await request(app).get('/cart/invalid');
      expect(response.status).toBe(404);
    });
  });
});