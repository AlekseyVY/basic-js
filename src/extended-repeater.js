const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let newStr = []
    let almostThere
    if(String(options['addition'])){
        if(options["additionRepeatTimes"]) {
            newStr.push(str + String(options["addition"]))
            for (let i = 1; i < options["additionRepeatTimes"]; i++) {
                newStr.push(String(options["addition"]))
            }
        } else {
            newStr.push(str)
            newStr.push(options['addition'])
        }
    }
    if(options["additionRepeatTimes"]){
        almostThere = newStr.join(options["additionSeparator"] || "|")
    } else {
        almostThere = newStr.join("")
    }
    let completedArr = []
    if(options["repeatTimes"]){
        if(newStr.length !== 0){
            for (let i = 0; i < options["repeatTimes"]; i++){
                completedArr.push(almostThere)
            }
        }
        else {
            for (let i = 0; i < options["repeatTimes"]; i++){
                completedArr.push(str)
            }
        }
    }
    return completedArr.length > 0 ? completedArr.join(options["separator"] || "+") : almostThere
};