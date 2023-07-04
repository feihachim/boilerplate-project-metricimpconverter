function ConvertHandler() {
  const numberPattern = /\d+(\.\d+)?/;
  this.getNum = function (input) {
    let numbers = input.split("/");

    switch (numbers.length) {
      case 2:
        return numberPattern.test(numbers[0]) && numberPattern.test(numbers[1])
          ? parseFloat(numbers[0]) / parseFloat(numbers[1])
          : undefined;
      case 1:
        return numberPattern.test(numbers[0]) ? parseFloat(numbers[0]) : 1;
      default:
        return undefined;
    }
  };

  this.getUnit = function (input) {
    let result;
    const wordPattern = /[a-z]+/;
    const filteredUnit = input.toLowerCase().match(wordPattern);
    if (
      filteredUnit.length === 0 ||
      filteredUnit.length >= 2 ||
      filteredUnit[0] == ""
    ) {
      return undefined;
    }
    const unitMap = new Map();
    unitMap.set("gal", "gal");
    unitMap.set("l", "L");
    unitMap.set("lbs", "lbs");
    unitMap.set("kg", "kg");
    unitMap.set("km", "km");
    unitMap.set("mi", "mi");
    result = unitMap.get(filteredUnit[0]) ?? undefined;
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    const returnedUnitMap = new Map();
    returnedUnitMap.set("gal", "L");
    returnedUnitMap.set("L", "gal");
    returnedUnitMap.set("lbs", "kg");
    returnedUnitMap.set("kg", "lbs");
    returnedUnitMap.set("mi", "km");
    returnedUnitMap.set("km", "mi");
    return returnedUnitMap.get(initUnit);
  };

  this.spellOutUnit = function (unit) {
    let result;
    const spelledUnitMap = new Map();
    spelledUnitMap.set("gal", "gallon");
    spelledUnitMap.set("lbs", "pound");
    spelledUnitMap.set("mi", "mile");
    spelledUnitMap.set("L", "liter");
    spelledUnitMap.set("kg", "kilogram");
    spelledUnitMap.set("km", "kilometer");
    result = spelledUnitMap.get(unit);
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    const convertMap = new Map();
    const input = parseFloat(initNum);
    convertMap.set("gal", input * galToL);
    convertMap.set("L", input / galToL);
    convertMap.set("lbs", input * lbsToKg);
    convertMap.set("kg", input / lbsToKg);
    convertMap.set("mi", input * miToKm);
    convertMap.set("km", input / miToKm);
    result = convertMap.get(initUnit).toFixed(5);
    return parseFloat(result);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(
      initUnit
    )}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`;
    return result;
  };
}

module.exports = ConvertHandler;
