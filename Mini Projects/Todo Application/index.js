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
    const editButton = document.getElementById("edit_button");
    const contentElements = document.querySelectorAll(".todo-list-heading, .todo-list-description");
    const taskSubmissionBtn = document.getElementById("task_submission");
    const taskListContainer = document.getElementById("task_list"); // Make sure to have a UL/OL with this ID in your HTML

    let editMode = false; // Track edit mode state
    let clickCount = 0;
    let clickTimer;

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

    function toggleEditMode() {
        editMode = !editMode; // Track edit mode state
        editButton.classList.toggle("active"); // Toggle active class

        if (editMode) {
            editButton.style.backgroundColor = "#ffffff"; // Highlight active state
            contentElements.forEach(element => element.setAttribute("contenteditable", "true"));
        } else {
            editButton.style.backgroundColor = ""; // Reset background
            contentElements.forEach(element => element.setAttribute("contenteditable", "false"));
        }
    }

    function handleTripleClick(event) {
        if (!editMode) return; // Delete only in edit mode

        const clickedItem = event.currentTarget;
        clickCount++;

        if (clickCount === 3) {
            clickedItem.remove(); // Remove the <li> element
            clickCount = 0;
            return;
        }

        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickCount = 0; // Reset click count if too much time passes
        }, 500); // Reset after 500ms
    }

    function addTask() {
        const taskHeading = document.getElementById("task_heading").value.trim();
        const taskPriority = document.getElementById("priority").value;
        const taskDetails = document.getElementById("details").value.trim();

        if (!taskHeading || !taskPriority || !taskDetails) {
            alert("Please fill out all fields!");
            return;
        }

        const li = document.createElement("li");
        li.classList.add("todo-list-contents");

        li.innerHTML = `
            <div class="todo-list-heading">${taskHeading}</div>
            <div class="todo-list-description">${taskDetails}</div>
            <div class="prioritynav">
                <div class="todo-list-priority">
                    <div class="circle ${taskPriority.toLowerCase()}"></div>
                </div>
                <div class="todo-list-date">${getDate()}</div>
            </div>
            <div class="todo-list-checkbox"></div>
        `;

        li.addEventListener("click", handleTripleClick); // Attach triple-click event

        taskListContainer.appendChild(li);

        // Show success alert
        alert("Task added successfully!");

        // Clear form fields after submission
        document.getElementById("task_heading").value = "";
        document.getElementById("priority").value = "";
        document.getElementById("details").value = "";
    }


    earlyAccessBtn?.addEventListener("click", () => togglePages(true));
    touchIdBtn?.addEventListener("click", () => togglePages(false));
    dashboard?.addEventListener("click", () => toggleButtons(true));
    task?.addEventListener("click", () => toggleButtons(false));
    editButton?.addEventListener("click", toggleEditMode);
    taskSubmissionBtn?.addEventListener("click", addTask);
    toggleButtons(true); // Ensure layout is correct on page load

    // Attach triple-click event listener to each existing todo list item
    document.querySelectorAll(".todo-list-contents").forEach(item => {
        item.addEventListener("click", handleTripleClick);
    });
});
