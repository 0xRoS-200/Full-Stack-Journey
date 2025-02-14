// Remove duplicate elements from the array numbers = [1, 2, 2, 3, 4, 4, 5]
const numbers = [1, 2, 2, 3, 4, 4, 5];
const new_arr = [];
numbers.forEach((num) => {
    if(!new_arr.includes(num)){
        new_arr.push(num);
    }
});
console.log(new_arr);