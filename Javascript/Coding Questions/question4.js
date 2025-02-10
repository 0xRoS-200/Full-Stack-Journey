// 4️⃣ Create a program that checks if a given number is divisible by both 3 and 5.

function check_divisible(num) {
    if (num % 5 == 0 && num % 3 == 0) {
        return "Divisible"
    }
    else {
        return "Not Divisible"
    }
}

console.log(check_divisible(14))