// JavaScript to dynamically populate the year
document.getElementById("current-year").textContent = new Date().getFullYear();

// JavaScript to dynamically update the last modified date
document.getElementById("last-modified").textContent = "Last Modified: " + document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

// Set Wind Chill Value
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);



document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 768) {
        fetch('images/weather.svg')
            .then(response => response.text())
            .then(svgContent => {
                const weatherIconContainer = document.querySelector('.weather-icon');
                if (weatherIconContainer) {
                    weatherIconContainer.outerHTML = svgContent;
                    const inlineSVG = document.querySelector('svg');
                    inlineSVG.classList.add('weather-icon');
                    inlineSVG.style.width = '20px';
                    inlineSVG.style.height = '20px';
                }
            });
    } else {
        document.querySelector('.weather-icon').innerHTML = '&#9729;';
    }
});