const CustomError = require("../extensions/custom-error");

module.exports = function transform(data) {
  if(!Array.isArray(data)){
    throw new Error()
  }
  let arr = [...data]
  let transformed = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-next"){
      i++;
    }
    else if(arr[i] === "--discard-prev"){
      if(arr[i - 2] !== "--discard-next" && i !== 0){
        transformed.pop()
      }
    }
    else if(arr[i] === "--double-next"){
      if(i !== (arr.length - 1)){
        transformed.push(arr[i + 1])
      }
    }
    else if(arr[i] === "--double-prev"){
      if(i !== 0){
        if(arr[i - 2] !== "--discard-next")
          transformed.push(transformed[transformed.length - 1])
      }
    } else {
      transformed.push(arr[i])
    }
  }
  return transformed
};