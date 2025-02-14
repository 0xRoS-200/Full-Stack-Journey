// Given an array numbers = [1, 2, 3, 5, 6], find the missing number in the sequence. 

//hint use n * (n+1)/2 to get sum of natural numbers

const numbers = [1, 2, 3, 5, 6];
let n = numbers.length + 1;  // +1 coz pne number is missing
let total_sum = n * (n + 1) / 2;
let arr_sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(total_sum - arr_sum);