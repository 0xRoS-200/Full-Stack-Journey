/**
 * Write your challenge solution here
 */
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("mainHeading");
    const red_button = document.getElementById("redButton");
    const green_button = document.getElementById("greenButton");
    const blue_button = document.getElementById("blueButton");
    const purple_button = document.getElementById("purpleButton");
    const reset_button = document.getElementById("resetButton");

    red_button.addEventListener("click", () => {
        text.style.color = "#e74c3c"; // Red
    });

    green_button.addEventListener("click", () => {
        text.style.color = "#2ecc71"; // Green
    });

    blue_button.addEventListener("click", () => {
        text.style.color = "#3498db"; // Blue
    });

    purple_button.addEventListener("click", () => {
        text.style.color = "#9b59b6"; // Purple
    });

    reset_button.addEventListener("click", () => {
        text.style.color = "#34495e"; // Reset to default color
    });
});
