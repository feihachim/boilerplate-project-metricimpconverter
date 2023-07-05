const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // # read a whole number input
  test("read a whole number input", function () {
    assert.isOk(convertHandler.getNum("32km"), "a whole number input is valid");
  });
  // # read a decimal number input
  test("read a decimal number input", function () {
    assert.isOk(
      convertHandler.getNum("3.2l"),
      "a decimal number input is valid"
    );
  });
  // # read a fractional input
  test("read a fractional input", function () {
    assert.isOk(convertHandler.getNum("3/2gal"), "a fractional input is valid");
  });
  // # read a factional input with a decimal
  test("read a fractional input with a decimal", function () {
    assert.isOk(
      convertHandler.getNum("3/1.02lbs"),
      " a fractional input with a decimal is valid"
    );
  });
  // # error on a double fraction
  test("error on a double fraction", function () {
    assert.isUndefined(
      convertHandler.getNum("3/2/7km"),
      "error on a double fracrion"
    );
  });
  // # default to 1 when no numerical input
  test("default input to 1", function () {
    assert.strictEqual(
      convertHandler.getNum("km"),
      1,
      "default input to 1 when no numerical input"
    );
  });
  // # read valid input unit
  test("read a valid input unit", function () {
    assert.isOk(convertHandler.getUnit("32km"), "valid input unit");
  });
  // # error for invalid input unit
  test("error for invalid input unit", function () {
    assert.isUndefined(convertHandler.getUnit("32mpl"), "invalid input unit");
  });
  // # return correct unit
  test("return correct unit", function () {
    assert.isOk(convertHandler.getReturnUnit("km"), "correct return unit");
  });
  // # return spelled-out string unit
  test("return spelled-out string unit", function () {
    assert.isOk(convertHandler.getReturnUnit("km"), "correct spelled-out unit");
  });
  // # convert gal to L
  test("convert gal to L", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("gal"),
      "L",
      "convert gal to L"
    );
  });
  // # convert L to gal
  test("convert L to gal", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("L"),
      "gal",
      "convert L to gal"
    );
  });
  // # convert mi to km
  test("convert mi to km", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("mi"),
      "km",
      "convert mi to km"
    );
  });
  // # convert km to mi
  test("convert km to mi", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("km"),
      "mi",
      "convert km to mi"
    );
  });
  // # convert lbs to kg
  test("convert lbs to kg", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "convert lbs to kg"
    );
  });
  // # convert kg to lbs
  test("convert kg to lbs", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "convert kg to lbs"
    );
  });
});
