// Given an array letters = ["a", "b", "c", "d"], use slice to extract ["b", "c"] and use splice to replace "c" with "x".

const letters = ["a", "b", "c", "d"];
const extracted = letters.slice(1, 3);
console.log(extracted);
letters.splice(2, 1, "x");
console.log(letters);