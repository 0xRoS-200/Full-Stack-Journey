function updateClock() {
    const time = document.getElementById("time");
    const date = document.getElementById("date");

    const now = new Date()
    const hours = now.getHours() % 12 || 12;
    const mins = now.getMinutes().toString().padStart(2, "0");
    const secs = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    time.textContent = `${hours}:${mins}:${secs} ${ampm}`;
    const name = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const getDays = name[now.getDay() - 1];
    const day = now.getDay().toString().padStart(2, "0");
    const month = now.getMonth().toString().padStart(2, "0");
    const year = now.getFullYear();

    date.textContent = `${day}-${month}-${year}, ${getDays}`

}

setInterval(updateClock, 1000)

updateClock()