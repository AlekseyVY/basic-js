const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const flatArray = arr.flat()
  let count = 0
  flatArray.map((elem) => {
    elem === "^^" ? count++ : elem
  })
  return count
};
