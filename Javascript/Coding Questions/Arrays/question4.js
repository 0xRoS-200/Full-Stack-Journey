/*
Find the Largest Number in an Array

    Given an array of numbers, find and return the largest number.
    */

function return_Max(array1) {
    let store_max = array1[0]
    for (let i = 1; i < array1.length; i++) {
        if (array1[i] > store_max) {
            store_max = array1[i];
        }
    }
    return store_max;
}

arr1 = [34, 2, 11, 21, 56, 783, 12, 1, 0];
console.log(return_Max(arr1));