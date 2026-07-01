// ============================================
// Weather Dashboard — JavaScript
// Fetches live weather data from OpenWeatherMap
// using async/await and updates the UI.
// ============================================

// ---------- OpenWeatherMap API Configuration ----------
// Free-tier API key (replace with your own if needed)
const API_KEY = "1adbf84d1d9c4b5f9fa01ff2b3cbcf48";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// ⚠️ IMPORTANT:
// The key above is a placeholder. You need a real OpenWeatherMap API key.
// 1. Go to https://openweathermap.org/api and sign up (free).
// 2. Copy your API key from your account dashboard.
// 3. Replace the API_KEY value above with your real key.

// ---------- DOM Element References ----------
const searchForm    = document.getElementById("search-form");
const cityInput     = document.getElementById("city-input");
const loader        = document.getElementById("loader");
const errorMessage  = document.getElementById("error-message");
const errorText     = document.getElementById("error-text");
const weatherCard   = document.getElementById("weather-card");

// Weather data display elements
const cityNameEl     = document.getElementById("city-name");
const descriptionEl  = document.getElementById("weather-description");
const weatherIconEl  = document.getElementById("weather-icon");
const temperatureEl  = document.getElementById("temperature");
const feelsLikeEl    = document.getElementById("feels-like");
const humidityEl     = document.getElementById("humidity");
const windSpeedEl    = document.getElementById("wind-speed");
const pressureEl     = document.getElementById("pressure");

// ---------- Event Listener: Form Submit ----------
// When the user submits the form, we fetch weather data
searchForm.addEventListener("submit", (event) => {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the city name and trim whitespace
  const city = cityInput.value.trim();

  // Validate: make sure input isn't empty
  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  // Fetch and display weather data
  fetchWeather(city);
});

// ---------- Main Fetch Function (async/await) ----------
/**
 * Fetches weather data for the given city from OpenWeatherMap
 * and updates the UI with the results.
 *
 * @param {string} city - The name of the city to look up
 */
async function fetchWeather(city) {
  // 1. Show the loading spinner; hide previous results/errors
  showLoader();
  hideError();
  hideWeatherCard();

  try {
    // 2. Build the API URL with query parameters
    //    - q: city name
    //    - appid: our API key
    //    - units: metric (for °C, m/s)
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    // 3. Make the network request using fetch + await
    const response = await fetch(url);

    // 4. Check if the response was successful
    if (!response.ok) {
      // The API returns specific HTTP status codes:
      // 404 = city not found, 401 = invalid API key, etc.
      if (response.status === 404) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
      } else if (response.status === 401) {
        throw new Error("Invalid API key. Please update your API key in script.js.");
      } else {
        throw new Error(`Server error (${response.status}). Please try again later.`);
      }
    }

    // 5. Parse the JSON response
    const data = await response.json();

    // 6. Update the UI with the weather data
    displayWeather(data);

  } catch (error) {
    // 7. Handle different types of errors
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      // Network error (no internet, DNS failure, etc.)
      showError("Network error. Please check your internet connection and try again.");
    } else {
      // API error or other known error
      showError(error.message);
    }
  } finally {
    // 8. Always hide the loader when done (success or failure)
    hideLoader();
  }
}

// ---------- Display Weather Data ----------
/**
 * Takes the parsed JSON weather data and populates
 * the weather card with the relevant information.
 *
 * @param {Object} data - Parsed weather data from the API
 */
function displayWeather(data) {
  // Extract the pieces of data we need from the response
  const {
    name,                          // City name
    sys: { country },              // Country code (e.g., "US", "IN")
    main: {
      temp,                        // Temperature in °C
      feels_like,                  // "Feels like" temperature
      humidity,                    // Humidity percentage
      pressure                     // Atmospheric pressure in hPa
    },
    weather: [{ description, icon }],  // Weather condition + icon code
    wind: { speed }                    // Wind speed in m/s
  } = data;

  // Populate the DOM elements with data
  cityNameEl.textContent     = `${name}, ${country}`;
  descriptionEl.textContent  = description;
  temperatureEl.textContent  = Math.round(temp);
  feelsLikeEl.textContent    = `${Math.round(feels_like)}°C`;
  humidityEl.textContent     = `${humidity}%`;
  windSpeedEl.textContent    = `${speed} m/s`;
  pressureEl.textContent     = `${pressure} hPa`;

  // Build the weather icon URL from OpenWeatherMap
  // The @2x suffix gives us a higher resolution icon
  weatherIconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIconEl.alt = description;

  // Show the weather card with a nice animation
  showWeatherCard();
}

// ---------- UI Helper Functions ----------

/** Show the loading spinner */
function showLoader() {
  loader.classList.remove("hidden");
}

/** Hide the loading spinner */
function hideLoader() {
  loader.classList.add("hidden");
}

/** Show an error message to the user */
function showError(message) {
  errorText.textContent = message;
  errorMessage.classList.remove("hidden");

  // Re-trigger the shake animation by removing and re-adding the element
  errorMessage.style.animation = "none";
  // Force reflow so the browser recognizes the change
  errorMessage.offsetHeight;
  errorMessage.style.animation = "";
}

/** Hide the error message */
function hideError() {
  errorMessage.classList.add("hidden");
}

/** Show the weather result card */
function showWeatherCard() {
  weatherCard.classList.remove("hidden");

  // Re-trigger the slide-up animation
  weatherCard.style.animation = "none";
  weatherCard.offsetHeight;
  weatherCard.style.animation = "";
}

/** Hide the weather result card */
function hideWeatherCard() {
  weatherCard.classList.add("hidden");
}
