// Check if the array numbers = [2, 4, 6, 8] contains at least one odd number (some) and if all numbers are even (every).

const numbers = [2, 4, 6, 8];
const odd_check = numbers.some(num => num % 2 !== 0);
console.log(odd_check);
const all_even = numbers.every(num => num % 2 === 0);
console.log(all_even);