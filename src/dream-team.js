const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr) === false) {
    return false
  }
  const newArr = arr.filter((ele) => typeof ele === "string")
  const readyArr = newArr.map((ele) => {
    return ele.trim().toUpperCase()
  }).sort()
  return readyArr.map((ele) => ele[0]).join("")
};