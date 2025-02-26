/**
 * Write your challenge solution here
 */
const bulb = document.getElementById("bulb");
const body_background = document.getElementById("body");
const toggler = document.getElementById("toggleButton")
const bulb_status = document.getElementById("status");

function toggleswitch() {
    if (toggler.innerHTML.trim() === "Turn On") {
        toggler.innerHTML = "Turn Off";
        body_background.classList.add("dark-mode");
        bulb_status.innerHTML = "Status: On"
        bulb.classList = "bulb"

    }
    else {
        toggler.innerHTML = "Turn On";
        body_background.classList.remove("dark-mode");
        bulb_status.innerHTML = "Status: Off";
        bulb.classList = "bulb off"

    }
}

toggler.addEventListener("click", toggleswitch)




