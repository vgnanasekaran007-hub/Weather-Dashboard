# 🌤️ Weather Dashboard

A modern, responsive Weather Dashboard that fetches **live weather data** for any city worldwide using the OpenWeatherMap API. Built with pure HTML, CSS, and JavaScript — no frameworks required.

## 🚀 Live Demo

👉 **[Weather Dashboard — Live](https://weather-dashboard-seven-henna.vercel.app/)**

---

## ✨ Features

- 🔍 **City Search** — Enter any city name to get real-time weather data
- 🌡️ **Temperature Display** — Current temperature in °C with "feels like" info
- 🌦️ **Weather Condition** — Description with animated weather icon
- 💧 **Humidity** — Current humidity percentage
- 💨 **Wind Speed** — Wind speed in m/s
- 🔄 **Atmospheric Pressure** — Pressure in hPa
- ⏳ **Loading State** — Animated spinner while fetching data
- ❌ **Error Handling** — Graceful handling of:
  - Empty input validation
  - Invalid city names (404)
  - Invalid API key (401)
  - Network connection errors
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- 🎨 **Glassmorphism UI** — Premium dark theme with animated background blobs

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Glassmorphism design, animations, responsive layout |
| **JavaScript (ES6+)** | Fetch API with `async/await`, DOM manipulation |
| **OpenWeatherMap API** | Real-time weather data |
| **Google Fonts** | Inter font family for modern typography |

---

## 📂 Project Structure

```
weather-dashboard/
├── index.html      # Main HTML structure
├── style.css       # Styles — glassmorphism, animations, responsive
├── script.js       # API calls, error handling, DOM updates
└── README.md       # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- An [OpenWeatherMap](https://openweathermap.org/api) API key (free tier)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vgnanasekaran007-hub/Weather-Dashboard.git
   cd Weather-Dashboard
   ```

2. **Add your API key**

   Open `script.js` and replace the `API_KEY` value on **line 10** with your own key:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```

   > 💡 **Tip:** Sign up at [openweathermap.org](https://openweathermap.org/api) to get a free API key. New keys may take **up to 2 hours** to activate.

3. **Open in browser**
   ```bash
   # Option 1: Simply open the file
   open index.html

   # Option 2: Use a local server (recommended)
   python3 -m http.server 8080
   # Then visit http://localhost:8080
   ```

---

## 🌐 API Reference

This project uses the **OpenWeatherMap Current Weather API**.

| Parameter | Value |
|-----------|-------|
| **Endpoint** | `https://api.openweathermap.org/data/2.5/weather` |
| **Method** | `GET` |
| **Units** | Metric (°C, m/s) |

### Sample Response

```json
{
  "name": "London",
  "main": {
    "temp": 18.5,
    "feels_like": 17.2,
    "humidity": 72,
    "pressure": 1015
  },
  "weather": [
    {
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "wind": {
    "speed": 3.6
  },
  "sys": {
    "country": "GB"
  }
}
```

---

## 📸 Screenshots

### 🔍 Search View
The clean dashboard interface with a city search bar and gradient background with animated blobs.

### 🌤️ Weather Results
After searching, the weather card slides up showing:
- City name & country
- Animated weather icon
- Large temperature display
- Detail cards for Feels Like, Humidity, Wind Speed, and Pressure

### ❌ Error Handling
Invalid cities and network errors show a clear error message with a shake animation.

---

## 🎨 Design Highlights

- **Glassmorphism** — Frosted glass card effects with `backdrop-filter: blur()`
- **Animated Blobs** — Floating gradient blobs in the background for visual depth
- **Gradient Text** — Title and temperature use a blue-to-purple gradient
- **Micro-animations** — Hover effects, icon bounce, card slide-up, error shake
- **Dark Theme** — Curated deep purple/blue palette for a premium feel

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Gnanasekaran V**

- 📧 Email: [v.gnanasekaran007@gmail.com](mailto:v.gnanasekaran007@gmail.com)
- 🐙 GitHub: [@vgnanasekaran007-hub](https://github.com/vgnanasekaran007-hub)

---

<p align="center">
  ⭐ Star this repo if you found it useful!
</p>
