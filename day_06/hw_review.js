// EXERCISE 1

// function addNumbers(numberA, numberB) {
//   var twoPlusTwo = numberA + numberB
//   return twoPlusTwo;
// }
//
// // var twoPlusTwo = addNumbers(2, 2);
// //
// // var twoPlusTwoEquation = addNumbers(2, 2) + addNumbers(2, 2);
//
// console.log(addNumbers(2, 2));
//
// // console.log(twoPlusTwo) // 4


// EXERCISE 2
// function yell(x){
//   console.log(x.toUpperCase());
// }
//
// function yell10(x){
//   console.log(x.repeat(10));
// }
//
// yell10("test");



// EXERCISE 3
// function longest(x, y){
//   if(x.length > y.length){
//     return x;
//   } else {
//     return y;
//   }
// }
//
//
// console.log(longest("Bobby", "Erickson"));




// EXERCISE 4
function isVowel(x){
  if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
    return true;
  } else if(x === "A" || x === "E" || x === "I" || x === "O" || x === "U"){
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("a"));
console.log(isVowel("E"));
console.log(isVowel("r"));
