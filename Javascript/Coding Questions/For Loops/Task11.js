/*
Write a program to print a hollow pyramid pattern for a given n. For example, if n = 5, the output should look like this:
    *
   * *
  *   *
 *     *
*********

*/

let n = 5;

// Outer loop for rows
for (let i = 1; i <= n; i++) {
    let pattern_store = "";

    // Printing leading spaces
    for (let j = 1; j <= n - i; j++) {
        pattern_store += " ";
    }

    // Printing stars and spaces for hollow part
    for (let k = 1; k <= 2 * i - 1; k++) {
        // Print '*' only at borders or last row
        if (k === 1 || k === 2 * i - 1 || i === n) {
            pattern_store += "*";
        } else {
            pattern_store += " ";
        }
    }

    console.log(pattern_store);
}
