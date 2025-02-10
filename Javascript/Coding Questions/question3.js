// 3️⃣ Write a function that takes a string and returns "Short" if its length is less than 5, otherwise returns "Long".

function length_of_string(user_input) {
    if (user_input.length < 5) {
        return "Short"
    }
    else {
        return "Long"
    }
}

console.log(length_of_string("udit"))