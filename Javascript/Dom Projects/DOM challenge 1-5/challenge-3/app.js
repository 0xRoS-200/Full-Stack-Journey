document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("nameInput");
    const job_title = document.getElementById("jobInput");
    const age = document.getElementById("ageInput");
    const bio = document.getElementById("bioInput");

    const preview_name = document.getElementById("nameDisplay");
    const preview_job_title = document.getElementById("jobDisplay");
    const preview_age = document.getElementById("ageDisplay");
    const preview_bio = document.getElementById("bioDisplay");

    // Function to update the preview
    const updatePreview = () => {
        preview_name.textContent = name.value.trim() === "" ? "Not provided" : name.value;
        preview_job_title.textContent = job_title.value.trim() === "" ? "Not provided" : job_title.value;

        // Validate age input against min and max attributes
        const ageValue = age.value.trim();
        const minAge = parseInt(age.min, 10);
        const maxAge = parseInt(age.max, 10);

        if (ageValue === "") {
            preview_age.textContent = "Not provided";
        } else if (ageValue >= minAge && ageValue <= maxAge) {
            preview_age.textContent = ageValue;
        } else {
            preview_age.textContent = "Invalid age"; // Handle invalid age input
        }

        preview_bio.textContent = bio.value.trim() === "" ? "Not provided" : bio.value;
    };

    // Add event listeners to all input fields
    name.addEventListener("input", updatePreview);
    job_title.addEventListener("input", updatePreview);
    age.addEventListener("input", updatePreview);
    bio.addEventListener("input", updatePreview);

    // Initial update in case there are default values
    updatePreview();
});