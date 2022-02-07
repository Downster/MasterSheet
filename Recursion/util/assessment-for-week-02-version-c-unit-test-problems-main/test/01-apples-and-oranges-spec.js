const assert = require('assert');

const applesAndOranges = require('../problems/01-apples-and-oranges.js');

describe('applesAndOranges()', function() {
    it('should return an integer representing number of keys and values that are either "apple" or "orange"', function() {

        let obj1 = { "banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit" }
        let result1 = applesAndOranges(obj1) // 1
        assert.strictEqual(result1, 1)

    });

    it('should count keys and values that contain either "apple" or "orange"', function() {

        let obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
        let result2 = applesAndOranges(obj2) // 3
        assert.strictEqual(result2, 3)

        let obj3 = {"orange-juice": "orange", "apple-sauce": "apple", "snapple": "peach-tea"}
        let result3 = applesAndOranges(obj3) // 5
        assert.strictEqual(result3, 5)

    });
});