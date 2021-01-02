const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(state = true) {
    this.reverse = state;
  }
  encrypt() {
    if(arguments.length !== 2){
      throw new Error("Wrong arguments!");
    }
    let mainString = arguments["0"].toUpperCase();
    let cryptKey = arguments["1"].repeat( Math.ceil( mainString.length / arguments["1"].length)).toUpperCase();
    let encodedMessage = new Array(mainString.length);
    for(let i = 0, j = 0; i < mainString.length; i++, j++){
      if(mainString.charCodeAt(i) >= 65 && mainString.charCodeAt(i) <= 90){
        encodedMessage[i] = String.fromCharCode( ((mainString.charCodeAt(i) + cryptKey.charCodeAt(j) - 130) % 26) + 65);
      } else {
        encodedMessage[i] = mainString[i];
        j--;
      }
    }
    return this.reverse ? encodedMessage.join('') : encodedMessage.reverse().join('').toUpperCase()
  }    
  decrypt() {
    if(arguments.length !== 2){
      throw new Error("Wrong arguments!");
    }
    let mainString = arguments["0"].toUpperCase();
    let cryptKey = arguments["1"].repeat( Math.ceil( mainString.length / arguments["1"].length)).toUpperCase();
    let decodedMessage = new Array(mainString.length);
    for(let i = 0, j = 0; i < mainString.length; i++, j++){
      if(mainString.charCodeAt(i) >= 65 && mainString.charCodeAt(i) <= 90){
        decodedMessage[i] = String.fromCharCode( ((mainString.charCodeAt(i) + 26 - cryptKey.charCodeAt(j)) % 26) + 65 );
      } else {
        decodedMessage[i] = mainString[i];
        j--;
      }
    }
    return this.reverse ? decodedMessage.join('') : decodedMessage.reverse().join('').toUpperCase()
  }
}

module.exports = VigenereCipheringMachine;







const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(true);

let o = reverseMachine.encrypt('attack at dawn!', 'alphonse')
console.log(o)
//=> 'AEIHQX SX DLLU!'