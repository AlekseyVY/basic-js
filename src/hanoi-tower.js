const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0
  }
  result.turns = 2 ** disksNumber - 1
  result.seconds = Math.floor(result.turns * (1 / (turnsSpeed / 3600)))
  return result
}
