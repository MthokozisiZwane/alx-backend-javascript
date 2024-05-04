const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        // Creates a spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the original console.log function after each test
        consoleSpy.restore();
    });

    it('should log the correct message for total amount 100 and total shipping 20', function () {
        // Call the function with total amount 100 and total shipping 20
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with the correct message
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct message for total amount 10 and total shipping 10', function () {
        // Calls the function with total amount 10 and total shipping 10
        sendPaymentRequestToApi(10, 10);

        // Verifies that console.log was called with the correct message
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });

    it('should call console.log only once for each call', function () {
        // Call the function with total amount 100 and total shipping 20
        sendPaymentRequestToApi(100, 20);

        // Calls the function with total amount 10 and total shipping 10
        sendPaymentRequestToApi(10, 10);

        // Verifies that console.log was called only once for each call
        expect(consoleSpy.calledTwice).to.be.true;
    });
});