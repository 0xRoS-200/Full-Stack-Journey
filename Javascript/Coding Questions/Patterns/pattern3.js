/*

*  
* *  
* * *  
* * * *  
* * * * *  
Hint: Use a nested loop where the outer loop controls the rows, and the inner loop prints *.

*/

//outer loop
for(let o_loop = 1; o_loop < 6; o_loop++){
    let store_pattern = "";
    for(let i_loop = 1; i_loop <= o_loop; i_loop++){
        store_pattern += "* ";
    }
    console.log(store_pattern);
}