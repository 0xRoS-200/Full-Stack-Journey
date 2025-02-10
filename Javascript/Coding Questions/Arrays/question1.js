// Sum of Array Elements
//Write a function that takes an array of numbers and returns the sum of all elements.

// function sum(array) {
//     let arr_sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         arr_sum += array[i];
//     }
//     return arr_sum;
// }


// arr1 = [23, 45, 44, 21, 34, 65, 23];
// const sum_of_array = sum(arr1);
// console.log(sum_of_array);

// one liner 

function sum(array) {
    return arr1.reduce((acc, num) => acc + num, 0);
}


arr1 = [23, 45, 44, 21, 34, 65, 23];
const sum_of_array = sum(arr1);
console.log(sum_of_array);