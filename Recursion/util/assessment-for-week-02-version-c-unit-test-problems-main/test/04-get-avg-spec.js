const assert = require('assert');

const getAverage = require('../problems/04-get-avg.js');

describe('getAverage()', function() {
    it('should a return a string with the average price for a collection of integer prices', function() {

        assert.strictEqual(getAverage(30, 70), '$50.00')
    });

    it('should a return a rounded string price for a collection of floating point input prices', function() {

        assert.strictEqual(getAverage(1.12, 2.23, 3.34, 4.45), '$2.79')
        assert.strictEqual(getAverage(4.99, 9.99, 19.99), '$11.66')
    });
});