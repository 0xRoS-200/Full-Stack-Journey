//1️⃣ Write a function that checks whether a number is positive, negative, or zero.

function numCheck(number) {
    if (number === 0) {
        return "Zero"
    }
    else if (number > 0) {
        return "Positive"
    }
    else {
        return "Negative"
    }
}

console.log(numCheck(0))