//Find the Maximum Element
//Given an array of numbers, return the maximum element in the array.

function returnMax(array) {
    let max_num_store = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max_num_store) {
            max_num_store = array[i];
        }
    }

    return max_num_store;
}

const arr = [23, 45, 434, 21, 34, 65, 23];
console.log(returnMax(arr));
