// Flatten the nested array nested = [1, [2, [3, [4]]]] to a single-level array.
const nested = [1, [2, [3, [4]]]];
const flattened_array = nested.flat(3);
console.log(flattened_array);