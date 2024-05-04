const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('Calls the function with success set to true', (done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });
});