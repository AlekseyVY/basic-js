const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  else if(!(Object.prototype.toString.call(date) === "[object Date]") ){
    throw new Error()
  }
  let month
  date.getMonth() === 0 ? month = date.getMonth() + 1 : month = date.getMonth()
  if(month === 1 && date.getDate() > 28){
    throw new Error()
  }
  const seasons = {
    "winter": [1, 11, 12],
    "spring": [2, 3, 4],
    "summer": [5, 6, 7],
    "autumn": [8, 9, 10]
  }
  for(k in seasons){
    if(seasons[k].includes(month)){
      return k
    }
  }
};