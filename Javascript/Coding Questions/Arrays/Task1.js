// Write a function that takes an array of numbers and returns the sum of all elements.

// function findSum(arr1) {
//     let sum_of_nums = 0;
//     arr1.forEach(arr1 => {
//         sum_of_nums += arr1;
//     });
//     return sum_of_nums;
// }

// const array1 = [45, 67, 92, 45, 17, 46, 87];
// const sum = findSum(array1);
// console.log(sum);




function findSum(arr1) {
    return arr1.reduce((sum, num) => sum + num, 0);   
}

const array1 = [45, 67, 92, 45, 17, 46, 87];
const sum = findSum(array1);
console.log(sum);