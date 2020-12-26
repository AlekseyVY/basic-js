const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  data = parseFloat(sample)
  if (typeof sample === "string" && data > 0 && data < 15){
    const log = 0.693
    const calc = log / HALF_LIFE_PERIOD
    const date = Math.ceil((MODERN_ACTIVITY / data) / calc)
    return date
  } else {
    return false
  }
};