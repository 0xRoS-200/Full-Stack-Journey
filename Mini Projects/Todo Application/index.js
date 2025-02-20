document.addEventListener("DOMContentLoaded", function () {
    function getDate() {
        const today = new Date();
        return today.toLocaleDateString("en-GB"); 
    }

    function getDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    }

    const dateElem = document.getElementById("date");
    const dayElem = document.getElementById("Day");

    if (dateElem && !dateElem.textContent.trim()) dateElem.textContent = getDate();
    if (dayElem && !dayElem.textContent.trim()) dayElem.textContent = getDay();

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
        toggleContent(showDashboard);
    }

    function toggleContent(showDashboardContent) {
        [...contentDashboard].forEach(el => el.classList.toggle("hidden", !showDashboardContent));
        [...contentTasks].forEach(el => el.classList.toggle("hidden", showDashboardContent));
    }

    earlyAccessBtn?.addEventListener("click", () => togglePages(true));
    touchIdBtn?.addEventListener("click", () => togglePages(false));
    dashboard?.addEventListener("click", () => toggleButtons(true));
    task?.addEventListener("click", () => toggleButtons(false));

    toggleButtons(true); // Ensures the layout is correct when the page loads
});
