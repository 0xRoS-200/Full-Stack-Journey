const buttons = document.querySelectorAll("#db-cb, #bm-cb, #tm-cb, #msg-cb, #cal-cb, #hl-cb, #se-cb");

function buttonSelect(event) {
    buttons.forEach(button => button.classList.remove("selected-cb"));
    event.target.classList.add("selected-cb");
}

buttons.forEach(button => button.addEventListener("click", buttonSelect));
