const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('Integration Testing', () => {
  describe('GET /available_payments', () => {
    it('responds with available payment methods', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('responds with a welcome message', (done) => {
      const username = 'Alice';
      request(app)
        .post('/login')
        .send({ userName: username })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal(`Welcome ${username}`);
          done();
        });
    });
  });
});