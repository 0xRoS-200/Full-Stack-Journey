// Split the array numbers = [1, 2, 3, 4, 5, 6, 7] into chunks of size 2
const numbers = [1, 2, 3, 4, 5, 6, 7];
const chunk_size = 2;
let chunks_arr = [];
while(numbers.length >= chunk_size)
{
    chunks_arr.push(numbers.splice(0,chunk_size));
}
console.log(chunks_arr); //valentines couple
console.log(numbers); //lone rangers or shall we say single fellow