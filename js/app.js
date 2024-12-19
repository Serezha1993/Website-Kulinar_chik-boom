document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("check");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});