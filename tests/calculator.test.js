const assert = require('assert');
const calculator = require('../calculator');


// // Test memory functions
describe('Calculator Memory Functions', function() {

});

// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});

// Add your tests here
// Test Square function
describe('Square Function', function() {
    const res = calculator.calculateSquare(5);
    it('should return 25', function() {
        assert.strictEqual(res, 25);
    });
});

// Test Reciprocal function
describe('Reciprocal Function', function() {
    const res = calculator.calculateReciprocal(10);
    it('should return 0.1', function() {
        assert.strictEqual(res, 0.1);
    });
});

// Test Sine function
describe('Sine Function', function() {
    const res = calculator.sine(0);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });
});

// Test Cosine function
describe('Cosine Function', function() {
    const res = calculator.cosine(0);
    it('should return 1', function() {
        assert.strictEqual(res, 1);
    });
});

// Test Tangent function
describe('Tangent Function', function() {
    const res = calculator.tangent(0);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });
});

// Test NaturalLog function
describe('Natural Log Function', function() {
    const res = calculator.naturalLog(1);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });
});