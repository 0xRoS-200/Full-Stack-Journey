function something() {
    try {
        return "try";
    } catch {
        return "catch";
    }
    return "finally"
}

console.log(something());