// Given an array numbers = [1, 2, 3], use flatMap to create a new array where each number is duplicated (e.g., [1, 1, 2, 2, 3, 3]).
const  numbers = [1, 2, 3];
const new_arr = numbers.flatMap((num) => [num, num*2]);
console.log(new_arr);