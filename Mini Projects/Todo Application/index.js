document.addEventListener("DOMContentLoaded", function () {
    // Function to get current date in DD/MM/YYYY format
    function getDate() {
        const today = new Date();
        return today.toLocaleDateString("en-GB"); // Formats as DD/MM/YYYY
    }

    // Function to get the current day name
    function getDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    }

    // Set date and day only once when the page loads
    const dateElem = document.getElementById("date");
    const dayElem = document.getElementById("Day");

    if (dateElem && !dateElem.textContent.trim()) dateElem.textContent = getDate();
    if (dayElem && !dayElem.textContent.trim()) dayElem.textContent = getDay();

    // Page transition handling
    const todoLanding = document.getElementById("Todo-App-Landing");
    const todoMain = document.getElementById("Todo-App-Main");
    const earlyAccessBtn = document.getElementById("early-access-btn");
    const touchIdBtn = document.getElementById("touch-id");
    const dashboard = document.getElementById("dashboard");
    const task = document.getElementById("task");
    const contentDashboard = document.getElementsByClassName("main-content-dashboard");
    const contentTasks = document.getElementsByClassName("main-content-tasks");

    function togglePages(showMain) {
        todoLanding.classList.toggle("hidden", showMain);
        todoMain.classList.toggle("hidden", !showMain);
    }

    function toggleButtons(showDashboard) {
        dashboard.classList.toggle("button-sidebar", showDashboard);
        task.classList.toggle("button-sidebar", !showDashboard);

        // Call toggleContent() when toggling dashboard and tasks
        toggleContent(showDashboard);
    }

    function toggleContent(showDashboardContent) {
        // Convert HTMLCollection to array and loop through
        [...contentDashboard].forEach(el => el.classList.toggle("hidden", !showDashboardContent));
        [...contentTasks].forEach(el => el.classList.toggle("hidden", showDashboardContent));
    }

    earlyAccessBtn?.addEventListener("click", () => togglePages(true));
    touchIdBtn?.addEventListener("click", () => togglePages(false));
    dashboard?.addEventListener("click", () => toggleButtons(true));
    task?.addEventListener("click", () => toggleButtons(false));
});
