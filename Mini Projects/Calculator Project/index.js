const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;

}

function allClear() {
    display.value = "";
}


function backSpace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Invalid"
    }
}

function percentage() {
    try {
        let currentValue = display.value;

        if (currentValue.includes('%')) {
            let number = parseFloat(currentValue.replace('%', ''));

            display.value = number / 100;
        } else {
            display.value = (parseFloat(display.value) / 100).toString();
        }
    } catch (error) {
        display.value = "Invalid";
    }
}
