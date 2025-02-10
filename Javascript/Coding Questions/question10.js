// 🔟 Given an array of numbers, print only the odd numbers using a loop.

let array = [1, 3, 4, 5, 6, 7, 8, 9];
let new_array = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        new_array.push(array[i]); 
    }
}

console.log(new_array);  
console.log(array);  
