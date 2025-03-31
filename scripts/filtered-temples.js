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

    console.log("Menu button selected:", menuButton);

    // Load all temples by default
    displayTemples(temples);

    // Event listeners for filtering temples
    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = event.target.textContent.toLowerCase();
            filterTemples(category);
        });
    });
});

// Temple Data
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg", loading: "lazy", alt: "Aba Nigeria Temple in Aba, Nigeria", width: 400, height: 250 },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg", loading: "lazy", alt: "Manti Utah Temple in Manti, Utah, United States", width: 400, height: 250 },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg", loading: "lazy", alt: "Payson Utah Temple in Payson, Utah, United States", width: 400, height: 250 },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg", loading: "lazy", alt: "Yigo Guam Temple in Yigo, Guam", width: 400, height: 250 },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, USA", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg", loading: "lazy", alt: "Washington D.C. Temple in Kensington, Maryland, United States", width: 400, height: 250 },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg", loading: "lazy", alt: "Lima Perú Temple in Lima, Perú", width: 400, height: 250 },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg", loading: "lazy", alt: "Mexico City Mexico Temple in Mexico City, Mexico", width: 400, height: 250 },
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg", loading: "lazy", alt: "Aba Nigeria Temple in Aba, Nigeria", width: 400, height: 250 },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg", loading: "lazy", alt: "Manti Utah Temple in Manti, Utah, United States", width: 400, height: 250 },
  
];


// Function to extract year from the "dedicated" field
function extractYear(dateString) {
    const match = dateString.match(/\d{4}/);
    return match ? parseInt(match[0]) : null;
}

// Function to display temple cards
function displayTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return; // Prevents errors if gallery is missing
    gallery.innerHTML = ""; 

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" decoding="async">
        `;
        gallery.appendChild(card);
    });
}

// Function to filter temples based on category
function filterTemples(category) {
    let filtered = temples;

    if (category === "old") {
        filtered = temples.filter(t => extractYear(t.dedicated) < 1900);
    } else if (category === "new") {
        filtered = temples.filter(t => extractYear(t.dedicated) > 2000);
    } else if (category === "large") {
        filtered = temples.filter(t => t.area > 90000);
    } else if (category === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
}
