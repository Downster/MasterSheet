const assert = require('assert');
const leastFrequentLetter = require('../problems/02-least-frequent-letter.js');

describe('leastFrequentLetter()', function() {
    it('should return the least frequent letter in a word string', function() {

        assert.strictEqual(leastFrequentLetter("mississippi"), "m")
        assert.strictEqual(leastFrequentLetter("ananab"), "b")
    });

    it('should return any of the least frequent letters in the case of a tie', function() {

        assert.strictEqual(leastFrequentLetter("Cheese") === 'C' || leastFrequentLetter("Cheese") === 'h' || leastFrequentLetter("Cheese") === 's', true )
    });
});