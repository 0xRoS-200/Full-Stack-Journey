/* 
Write a program to print the following pattern using nested loops:
    *
   ***
  *****
 *******
*********
*/

//outerloop
let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern_store = "";

    // Loop for spaces
    for (let j = 1; j <= n - i; j++) {
        pattern_store += " ";
    }

    // Loop for stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern_store += "*";
    }

    console.log(pattern_store);
}