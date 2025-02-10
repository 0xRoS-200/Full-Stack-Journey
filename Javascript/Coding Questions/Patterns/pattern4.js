/* 
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5  

Hint: The inner loop should print numbers instead of *.
*/

//outer loop
for(let o_loop = 1; o_loop < 6; o_loop++){
    let store_pattern = "";
    for(let i_loop = 1; i_loop <= o_loop; i_loop++){
        store_pattern += i_loop;
        store_pattern += " ";
    }
    console.log(store_pattern)
}