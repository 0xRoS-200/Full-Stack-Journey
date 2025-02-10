/*
Write a program to print the following pattern using nested loops:(Inverted right angled triangle)

*****
****
***
**
*

*/

//outer loop
for (let i = 5; i >= 1; i--) {
    let store_pattern = "";
    for (let j = 0; j < i; j++) {
        store_pattern += "*";
    }
    console.log(store_pattern)
}