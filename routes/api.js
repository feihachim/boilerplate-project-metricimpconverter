"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    console.log("input: " + input);
    const initNum = convertHandler.getNum(input);
    console.log({ initNum });
    const initUnit = convertHandler.getUnit(input);
    console.log({ initUnit });
    let errors = [];
    if (!initNum) {
      errors.push("number");
    }
    if (!initUnit) {
      errors.push("unit");
    }
    if (errors.length > 0) {
      res.json(`invalid ${errors.join(" and ")}`);
    } else {
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const returnUnitString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: returnUnitString,
      });
    }
  });
};
