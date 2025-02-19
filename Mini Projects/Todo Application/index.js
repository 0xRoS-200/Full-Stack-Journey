document.getElementById("early-access-btn").addEventListener("click", function() {
    let todoLanding = document.getElementById("Todo-App-Landing");
    let todoMain = document.getElementById("Todo-App-Main");

    // Ensure proper hiding & showing
    if (todoLanding.dataset.visible === "true") {
        todoLanding.dataset.visible = "false";
        todoLanding.style.display = "none"; // Hides the landing page

        todoMain.dataset.visible = "true";
        todoMain.style.display = "block"; // Shows the main page
    }
});

document.getElementById("touch-id").addEventListener("click", function() {
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
