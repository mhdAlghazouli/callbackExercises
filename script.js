// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

// const map = (array,cb) => {
  
//   return array.map(el => {
//     return cb(el)
//   });
// };

// function addTwo (num) {
//   return num + 2
// }



// console.log(map([1, 2, 3], addTwo));





// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
// const letters = ["a", "b", "c", "d"];
// let str = "";

// const forEach = (array, cb) => {
//   array.forEach((el) => {
//     cb(el)
    
//   });
//   return str;
// };

// const alphabet = function  (ele) {
//     return str += ele
// }

// console.log(forEach(letters, alphabet)) //should output abcd