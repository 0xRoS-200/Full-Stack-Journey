/* 
For n = 5, print:   
    *    
   * *   
  * * *  
 * * * *  
* * * * *  
 * * * *  
  * * *  
   * *   
    *    
Hint: Use two loops—one for the upper pyramid and another for the lower pyramid.
*/

// Upper pyramid
let n = 5;
for (let o_loop = 1; o_loop <= n; o_loop++) {
    let store_pattern = "";
    // Spaces
    for (let i_loop = 0; i_loop < n - o_loop; i_loop++) {
        store_pattern += " ";
    }
    // Stars with spaces
    for (let i_loop = 0; i_loop < o_loop; i_loop++) {
        store_pattern += "* ";
    }
    console.log(store_pattern);
}

// Lower pyramid
for (let o_loop = n - 1; o_loop >= 1; o_loop--) {
    let store_pattern = "";
    // Spaces
    for (let i_loop = 0; i_loop < n - o_loop; i_loop++) {
        store_pattern += " ";
    }
    // Stars with spaces
    for (let i_loop = 0; i_loop < o_loop; i_loop++) {
        store_pattern += "* ";
    }
    console.log(store_pattern);
}