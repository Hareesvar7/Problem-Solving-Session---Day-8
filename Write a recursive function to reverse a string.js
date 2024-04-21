function reverseString(str){
  if(str === ''){
    return "";
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

let str = 'abcd'
console.log(reverseString(str));
