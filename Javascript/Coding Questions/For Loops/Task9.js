/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
Print this pattern 

   */
n = 5;
for (let i = 1; i <= n; i++) {
    let store_pattern = "";

    for (let j = 1; j <= n - i; j++) {
        store_pattern += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        store_pattern += "*";
    }
    console.log(store_pattern);
}
for (let i = 1; i <= n - 1; i++) {
    let store_pattern = "";
    for (let j = 1; j <= i; j++) {
        store_pattern += " ";
    }
    for (let k = 1; k <= 2 * n - (i * 2 + 1); k++) {
        store_pattern += "*";
    }
    console.log(store_pattern);
}