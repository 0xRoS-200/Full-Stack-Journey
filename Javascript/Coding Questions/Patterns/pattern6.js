/*  
For n = 5, print:
* * * * *  
*       *  
*       *  
*       *  
* * * * *  
Hint: Print * at the borders and space inside using an if condition.
*/

//outer loop
let n = 5;
for (let o_loop = 1; o_loop < 6; o_loop++) {
    let store_pattern = "";
    for (let i_loop = 1; i_loop <= n; i_loop++) {
        if (o_loop === 1 || o_loop === 5) {
            store_pattern += "* "
        }
        else {
            if (i_loop === 1 || i_loop === n) {
                store_pattern += "* ";
            }
            else {
                store_pattern += "  ";
            }
        }
    }
    console.log(store_pattern)
}

