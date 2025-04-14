// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamically populate the footer year
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Dynamically update the last modified date
    const modifiedElement = document.getElementById("last-modified");
    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    // 3. Hamburger Menu Toggle with aria-expanded toggle
    const menuButton = document.getElementById("menu"); 
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
            navMenu.classList.toggle("show");
            menuButton.setAttribute("aria-expanded", !isExpanded);
            menuButton.textContent = !isExpanded ? "✖" : "☰";
        });
    }

    // 4. Smooth scroll ONLY for internal anchor links (starting with "#")
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 5. Welcome message with localStorage
    const user = {
        name: "Visitor",
        firstVisit: !localStorage.getItem("visited"),
        role: "Guest"
    };

    if (user.firstVisit) {
        alert(`Welcome to the Ikeja Landlords & Property Owners Association website, ${user.name}!`);
        localStorage.setItem("visited", "true");
    } else {
        console.log(`Welcome back, ${user.name}!`);
    }

    // 6. Dynamic announcement banner
    const meetingAnnouncement = document.createElement("div");
    meetingAnnouncement.id = "announcement-banner";
    meetingAnnouncement.innerHTML = `
        📢 General Meeting: Saturday, 20th July at 10 AM. Venue: Ikeja City Hall.
        <button class="close-btn" aria-label="Close Announcement">&times;</button>
    `;

    const mainEl = document.querySelector("main");
    if (mainEl && !localStorage.getItem("dismissedAnnouncement")) {
        document.body.insertBefore(meetingAnnouncement, mainEl);

        const closeBtn = meetingAnnouncement.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            meetingAnnouncement.remove();
            localStorage.setItem("dismissedAnnouncement", "true");
        });
    }

    // 7. Back to top button
    const topButton = document.getElementById("back-to-top");
    if (topButton) {
        window.onscroll = () => {
            topButton.style.display = window.scrollY > 300 ? "block" : "none";
        };
        topButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 8. Dark mode toggle
    const darkToggle = document.getElementById("dark-toggle");
    if (darkToggle) {
        darkToggle.onclick = () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark);
        };

        // Restore mode based on localStorage
        const savedMode = localStorage.getItem("darkMode") === "true";
        if (savedMode) {
            document.body.classList.add("dark-mode");
        }
    }
});
