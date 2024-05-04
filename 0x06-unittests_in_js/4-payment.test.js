const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let stub;

    beforeEach(function () {
        // Stub Utils.calculateNumber to always return 10
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(function () {
        // Restores the original function after each test
        stub.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', function () {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that Utils.calculateNumber was called with the correct arguments
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message to the console', function () {
        // Spy on console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with the correct message
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        // Restore the original console.log function
        consoleSpy.restore();
    });
});
