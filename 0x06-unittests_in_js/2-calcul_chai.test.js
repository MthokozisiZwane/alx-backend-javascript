import('chai').then(chai => {
    const expect = chai.expect;
    const calculateNumber = require('./2-calcul_chai');

    describe('calculateNumber', function () {
        describe('SUM', function () {
            it('should perform addition on rounded numbers', function () {
                expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            });
        });

        describe('SUBTRACT', function () {
            it('should perform subtraction on rounded numbers', function () {
                expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            });
        });

        describe('DIVIDE', function () {
            it('should perform division on rounded numbers', function () {
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            });

            it('should return "Error" if division by zero occurs', function () {
                expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
            });
        });
    });
}).catch(error => {
    console.error('Error while dynamically importing chai:', error);
});

