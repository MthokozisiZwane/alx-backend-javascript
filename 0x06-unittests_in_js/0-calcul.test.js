const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the rounded sum of two positive integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round the numbers and return the sum', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });

  it('should handle floating-point numbers correctly', function () {
    assert.strictEqual(calculateNumber(1.1, 3.2), 4);
    assert.strictEqual(calculateNumber(1.9, 3.2), 5);
  });

  it('should handle edge cases', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});
