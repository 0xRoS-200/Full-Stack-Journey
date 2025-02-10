// 7️⃣ Create a program that reverses a given string using a loop.

function reverse_String(text) {
    let reverse_String = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reverse_String += text[i];
    }
    return reverse_String;
}

console.log(reverse_String("apple"));