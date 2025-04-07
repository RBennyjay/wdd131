// JavaScript to dynamically populate the year
document.getElementById("current-year").textContent = new Date().getFullYear();

// JavaScript to dynamically update the last modified date
document.getElementById("last-modified").textContent = "Last Modified: " + document.lastModified;



// Array of products
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product dropdown dynamically
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;  // Use product ID for the value
  option.textContent = product.name;  // Display product name
  productSelect.appendChild(option);
});

// Get the current review count from localStorage (if it exists)
let reviewCount = localStorage.getItem("reviewCount");
if (!reviewCount) {
    reviewCount = 0;  // Initialize count if it doesn't exist
}

// Update the displayed count
document.getElementById("reviewCount").textContent = reviewCount;

// Form submission logic
const form = document.getElementById("reviewForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting to the server

    // Increment the review count
    reviewCount++;

    // Save the updated count to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Update the displayed count on the page
    document.getElementById("reviewCount").textContent = reviewCount;

    // Optionally, you can reset the form after submission
    form.reset();
    alert("Thank you for submitting your review!");
});
