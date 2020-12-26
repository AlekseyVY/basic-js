const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.length === 0 ? 1 : Array.isArray(arr) ? Math.max(...arr.map((ele) => this.calculateDepth(ele))) + 1 : 0;
  }
};
