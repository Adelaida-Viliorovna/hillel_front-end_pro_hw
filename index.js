const tempElement = document.getElementById("temperature");
const descElement = document.getElementById("description");
const windElement = document.getElementById("wind");
const humidityElement = document.getElementById("humidity");
const timeElement = document.getElementById("time");
const refreshBtn = document.getElementById("refresh-btn");

let lastUpdateTime = null;

async function fetchWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=dnipro&appid=4533ba6e0dc8e44af92c0107e1c0911c&lang=ua&units=metric"
    );

    console.log(`Response status: ${response.status}`);

    if (response.status !== 200) {
      throw Error(`status: ${response.status}`);
    }

    const data = await response.json();
    updateWeatherWidget(data);
  } catch (error) {
    console.error("Помилка отримання погоди:", error);
    tempElement.textContent = "Помилка завантаження даних!";
  }

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `Останнє оновлення: ${currentTime}`;
}

function updateWeatherWidget(data) {
  const { main, weather, wind, dt } = data;

  tempElement.textContent = `Температура: ${main.temp}°C`;
  descElement.textContent = `Опис: ${weather[0].description}`;
  windElement.textContent = `Вітер: ${wind.speed} м/с`;
  humidityElement.textContent = `Вологість: ${main.humidity}%`;

  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("weather-icon").src = iconUrl;
  document.getElementById("weather-icon").alt = weather[0].description;
}

refreshBtn.addEventListener("click", fetchWeather());

fetchWeather();
