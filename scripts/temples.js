// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically populate the footer year
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dynamically update the last modified date
    const modifiedElement = document.getElementById("last-modified");
    if (modifiedElement) {
        modifiedElement.textContent = "Last Modified: " + document.lastModified;
    }

    // Hamburger Menu Toggle
    const menuButton = document.getElementById("menu"); 
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
        });
    }
});

console.log("Menu button selected:", menuButton);
