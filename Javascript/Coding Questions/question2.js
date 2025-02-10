// 2️⃣ Create a program that determines if a given year is a leap year or not.

//leap year comes every 4 years and should be divisile by 100 and not 400

function is_Leap_Year(year) {
    if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
        return "Leap Year"
    }
    else {
        return "Not Leap Year"
    }
}

console.log(is_Leap_Year(2000))