// 6️⃣ Write a function that prints the multiplication table of a given number.

function multiplication_Table(num) {
    for (let i = 1; i <= 20; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }

}

multiplication_Table(14)