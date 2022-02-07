const assert = require('assert');
const applySale = require('../problems/03-grocery-item-sale.js');

describe('applySale()', function() {
    it('should return items that are priced more than $10 with a 20% discount', function() {
        items = [
                    {name: "eggs", price: 6},
                    {name: "bread", price: 5},
                    {name: "milk", price: 4},
                    {name: "walnuts", price: 15}
                    ];

        assert.deepStrictEqual(applySale(items), [ {name: "walnuts", price: 12} ])
    });

    it('should not give a discount to items less than or equal to $10', function() {
        items = [{name: "cashews", price: 10}]

        assert.deepStrictEqual(applySale(items), [])
    });
});
