// API URL
const apiUrl = `http://api.weatherstack.com/current?access_key=e7215c37f80a97a9d13196e916f204bb&query=Reykjavik,IS`;

// Fetch weather data
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Update HTML content with weather data
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const locationElement = document.getElementById("location");
    document.getElementById(
      "wind"
    ).textContent = `${data.current.wind_speed} km/h`;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("pressure").textContent = data.current.pressure;
    document.getElementById("uv_index").textContent = data.current.uv_index;
    document.getElementById("visibility").textContent =
      data.current.visibility + " km";

    temperatureElement.textContent = data.current.temperature + "°C";
    descriptionElement.textContent = data.current.weather_descriptions[0];
    locationElement.textContent = `${data.location.name}, ${data.location.country}`;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    if (document.body.style.filter === "invert(100%)") {
      document.body.style.filter = "none";
      document.body.style.backgroundColor = "rgb(229, 231, 235)"; // This is Tailwind's bg-gray-100 color
    } else {
      document.body.style.filter = "invert(100%)";
      document.body.style.backgroundColor = "rgb(17, 24, 39)"; // Choose a color that suits dark mode
    }
  });
