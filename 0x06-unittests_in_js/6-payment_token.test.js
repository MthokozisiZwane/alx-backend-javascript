const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with the correct data when success is true', function (done) {
        // Calls the function with success set to true
        getPaymentTokenFromAPI(true)
            .then(response => {
                // Verify that the response object contains the correct data
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(error => {
                done(error);
            });
    });

    it('should return an unresolved promise when success is false', function (done) {
        // Calls the function with success set to false
        getPaymentTokenFromAPI(false)
            .then(response => {
                done(new Error('Promise should not be resolved'));
            })
            .catch(error => {
                // Verifies that the promise is rejected
                expect(error).to.be.undefined;
                done();
            });
    });
});