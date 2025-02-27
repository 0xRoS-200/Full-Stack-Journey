document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    let taskCount = 0;
    let completedCount = 0;

    // Function to update task statistics
    const updateStats = () => {
        totalTasks.textContent = `Total tasks: ${taskCount}`;
        completedTasks.textContent = `Completed: ${completedCount}`;
    };

    // Function to add a new task
    const newTask = () => {
        // Remove "No tasks yet" message if it exists
        const emptyListMessage = document.querySelector(".empty-list");
        if (emptyListMessage) {
            taskList.removeChild(emptyListMessage);
        }

        // Check if the input is empty
        if (taskInput.value.trim() === "") {
            alert("Please input a task before proceeding.");
        } else {
            // Create new task elements
            const li = document.createElement("li");
            li.setAttribute("class", "task-item")
            const taskText = document.createElement("div");
            taskText.setAttribute("class", "task-text");
            taskText.textContent = taskInput.value.trim();

            const newCheckbox = document.createElement("input");
            newCheckbox.setAttribute("type", "checkbox");
            newCheckbox.setAttribute("class", "complete-checkbox");

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "delete-button");
            deleteButton.textContent = "Delete";

            // Append elements to the list item
            li.appendChild(newCheckbox);
            li.appendChild(taskText);
            li.appendChild(deleteButton);

            // Append the list item to the task list
            taskList.appendChild(li);

            // Increment task count and update stats
            taskCount++;
            updateStats();

            // Clear the input field
            taskInput.value = "";

            // Add event listener to delete button
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(li);
                taskCount--;
                if (newCheckbox.checked) completedCount--;
                updateStats();

                // Add "No tasks yet" message if the list is empty
                if (taskList.children.length === 0) {
                    const emptyMessage = document.createElement("li");
                    emptyMessage.textContent = "No tasks yet. Add one above!";
                    emptyMessage.setAttribute("class", "empty-list");
                    taskList.appendChild(emptyMessage);
                }
            });

            // Add event listener to checkbox
            newCheckbox.addEventListener("change", () => {
                if (newCheckbox.checked) {
                    taskText.style.textDecoration = "line-through";
                    completedCount++;
                } else {
                    taskText.style.textDecoration = "none";
                    completedCount--;
                }
                updateStats();
            });
        }
    };

    // Attach event listener to the add button
    addButton.addEventListener("click", newTask);

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            newTask();
        }
    });
});