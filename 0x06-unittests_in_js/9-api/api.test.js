const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Cart page', () => {
  describe('GET /cart/:id', () => {
    it('should return payment methods for a valid cart ID', async () => {
      const res = await chai.request(app).get('/cart/12');
      expect(res).to.have.status(200);
      expect(res.text).to.equal('Payment methods for cart 12');
    });

    it('should return a 404 status code for an invalid cart ID', async () => {
      const res = await chai.request(app).get('/cart/hello');
      expect(res).to.have.status(404);
      expect(res.text).to.equal('Cannot GET /cart/hello');
    });
  });
});