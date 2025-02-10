/* 
9️⃣ Print the following pattern using loops:
*
**
***
****
*****
*/

for (let i = 0; i <= 5; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += "*"
    }
    console.log(pattern)
}