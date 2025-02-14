// Write a function that takes an array of numbers and returns the maximum value.

// function maxNum(arr1) {
//     return arr1.reduce((max, num) => {
//         if (num > max) {
//             return num; // Update max if num is greater
//         }
//         return max; // Otherwise, keep the current max
//     }, -Infinity); // Initialize with -Infinity to handle all numbers
// }

// const array1 = [45, 22, 66, 98, 43, 23, 67, 22];
// const maximum_number = maxNum(array1);
// console.log(maximum_number);

function maxNum(arr1) {
    return Math.max(...arr1);
  }
  
  const array1 = [45, 22, 66, 98, 43, 23, 67, 22];
  const maximum_number = maxNum(array1);
  console.log(maximum_number); // Output: 98