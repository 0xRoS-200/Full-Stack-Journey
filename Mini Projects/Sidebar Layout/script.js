const buttons = document.querySelectorAll("#db-cb, #bm-cb, #tm-cb, #msg-cb, #cal-cb, #hl-cb, #se-cb");
const hamburger_Btn = document.getElementById("hamburger-btn");
const newbox = document.getElementById("newbox");

function buttonSelect(event) {
    buttons.forEach(button => button.classList.remove("selected-cb"));
    event.currentTarget.classList.add("selected-cb");
}

// Function to toggle sidebar
function showSidebar(event) {
    event.stopPropagation();
    newbox.classList.toggle("active");
}

// Function to hide sidebar when clicking outside
function hideSidebar(event) {
    if (!newbox.contains(event.target) && event.target !== hamburger_Btn) {
        newbox.classList.remove("active");
    }
}

// Attach event listeners
buttons.forEach(button => button.addEventListener("click", buttonSelect));
hamburger_Btn.addEventListener("click", showSidebar);
document.addEventListener("click", hideSidebar);
