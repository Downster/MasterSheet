const assert = require("assert");

const createAddress = require("../problems/05-address.js");

describe("createAddress()", function() {
  it("should return a function that accepts a string", function() {
    const address1 = createAddress("101 Broadway");

    assert.equal(address1("New York City, NY 12345"), "101 Broadway New York City, NY 12345");
  });

  it("should return a new function for each initial argument", function() {
    const address1 = createAddress("1 Street St");
    const address2 = createAddress("2 Treehouse Ln");

    assert.equal(address1("SF, CA 94111"), "1 Street St SF, CA 94111");
    assert.equal(address2("NYC, NY 10001"), "2 Treehouse Ln NYC, NY 10001");
  });
});
