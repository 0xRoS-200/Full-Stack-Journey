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
    const taskListContainer = document.getElementById("task_list");

    let editMode = false;
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
        editMode = !editMode;
        editButton.classList.toggle("active");

        // Query the latest task elements (including dynamically added ones)
        const contentElements = document.querySelectorAll(".todo-list-heading, .todo-list-description");

        if (editMode) {
            editButton.style.backgroundColor = "#ffffff";
            contentElements.forEach(element => element.setAttribute("contenteditable", "true"));
        } else {
            editButton.style.backgroundColor = "";
            contentElements.forEach(element => element.setAttribute("contenteditable", "false"));
        }
    }


    function handleTaskClick(event) {
        if (editMode) return;

        const taskItem = event.currentTarget;

        // Get current click count from dataset or set it to 0
        let taskClickCount = parseInt(taskItem.dataset.clickCount || "0", 10);
        taskClickCount++;

        if (taskClickCount === 3) {
            taskItem.remove(); // Remove the task after 3 clicks
            saveData();
            return;
        }

        if (taskClickCount === 1) {
            taskItem.classList.toggle("completed-task");
        }

        // Store updated click count in dataset
        taskItem.dataset.clickCount = taskClickCount;

        setTimeout(() => {
            taskItem.dataset.clickCount = "0"; // Reset counter after 500ms
        }, 500);

        saveData();
    }


    function saveData() {
        localStorage.setItem("data", taskListContainer.innerHTML);
    }

    function showTask() {
        const savedTasks = localStorage.getItem("data");

        if (savedTasks && savedTasks.trim() !== "") {
            taskListContainer.innerHTML = savedTasks;
        } else {
            taskListContainer.innerHTML = `
                <li id="welcome-message" class="todo-list-contents">
                    <div class="todo-list-heading">Welcome New User!</div>
                    <div class="todo-list-description">Start by adding your first task. Single click on the Task will mark it as completed and Triple click Deletes the Task! And the Edit mode lets you to edit the Task while it's Active! Have Fun!</div>
                </li>
            `;
            return;
        }
    }

    showTask();

    function addTask() {
        const taskHeading = document.getElementById("task_heading").value.trim();
        const taskPriority = document.getElementById("priority").value;
        const taskDetails = document.getElementById("details").value.trim();

        if (!taskHeading || !taskPriority || !taskDetails) {
            alert("Please fill out all fields!");
            return;
        }

        // Remove the "Welcome New User!" message if it exists
        const welcomeMessage = document.getElementById("welcome-message");
        if (welcomeMessage) {
            welcomeMessage.remove();
        }

        const li = document.createElement("li");
        li.classList.add("todo-list-contents");

        li.innerHTML = `
            <div class="todo-list-heading" contenteditable="false">${taskHeading}</div>
            <div class="todo-list-description" contenteditable="false">${taskDetails}</div>
            <div class="prioritynav">
                <div class="todo-list-priority">
                    <div class="circle ${taskPriority.toLowerCase()}"></div>
                    <div class="priority-text">${taskPriority}</div>
                </div>
                <div class="todo-list-date">${getDate()}</div>
            </div>
            <div class="todo-list-checkbox"></div>
        `;

        li.addEventListener("click", handleTaskClick);

        taskListContainer.appendChild(li);
        saveData();

        alert("Task added successfully!");

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
    toggleButtons(true);

    document.querySelectorAll(".todo-list-contents").forEach(item => {
        item.addEventListener("click", handleTaskClick);
    });
});
