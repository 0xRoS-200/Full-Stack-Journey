/*

* * * * *  
* * * *  
* * *  
* *  
*  
Hint: The outer loop runs in reverse (from 5 to 1).

*/
//outerloop
for(let o_loop = 5; o_loop > 0; o_loop--){
    let store_pattern = "";
    for(let i_loop = 1; i_loop <= o_loop; i_loop++){
        store_pattern += "* ";
    }
    console.log(store_pattern)
}