/*
Create an Array of Numbers

Create an array with numbers from 1 to 10.
Write a function that finds the sum of all numbers in the array.
    */


function findSum(array1) {
    let sum = 0
    for (let i = 0; i < array1.length; i++) {
        sum += array1[i];
    }
    return sum;
}

let arr1 = [45, 25, 654, 9, 2, 56, 45, 63, 56]
console.log(findSum(arr1))
