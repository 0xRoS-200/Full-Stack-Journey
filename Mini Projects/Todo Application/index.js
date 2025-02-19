document.getElementById("early-access-btn").addEventListener("click", function () {
    let todoLanding = document.getElementById("Todo-App-Landing");
    let todoMain = document.getElementById("Todo-App-Main");
    function getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    function getDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        let day = days[d.getDay()];
        return day;
    }

    let date = document.getElementById("date");
    if (!date.textContent.trim()) {
        date.textContent = getDate();
    }

    let day = document.getElementById("Day");
    if (!day.textContent.trim()) {
        day.textContent = getDay();
    }




    // Ensure proper hiding & showing
    if (todoLanding.dataset.visible === "true") {
        todoLanding.dataset.visible = "false";
        todoLanding.style.display = "none"; // Hides the landing page

        todoMain.dataset.visible = "true";
        todoMain.style.display = "block"; // Shows the main page
    }
});

document.getElementById("touch-id").addEventListener("click", function () {
    let todoLanding = document.getElementById("Todo-App-Landing");
    let todoMain = document.getElementById("Todo-App-Main");

    // Ensure proper hiding & showing
    if (todoMain.dataset.visible === "true") {
        todoMain.dataset.visible = "false";
        todoMain.style.display = "none"; // Hides the main page

        todoLanding.dataset.visible = "true";
        todoLanding.style.display = "block"; // Shows the landing page
    }
});

