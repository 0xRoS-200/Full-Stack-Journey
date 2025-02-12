/*
Write a program to print Pascal's Triangle for a given n. For example, if n = 5, the output should look like this:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

*/

function generatePascalsTriangle(n) {
    let triangle = [];

    for (let i = 0; i < n; i++) {
        let row = []; // New row
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }

    for (let row of triangle) {
        console.log(row.join(" "));
    }
}

generatePascalsTriangle(5);
