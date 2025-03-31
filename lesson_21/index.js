import { fetchWeatherData } from "./api.js";
import { showLoader, hideLoader } from "./loader.js";
import { renderResult } from "./render.js";

const form = document.getElementById("weather-form");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const baseUrl = form.action.trim();
  const city = document.getElementById("endpoint").value.trim();

  showLoader(loader);
  result.textContent = "";

  try {
    const data = await fetchWeatherData(baseUrl, city);
    renderResult(result, data);
  } catch (error) {
    renderResult(result, { error: error.message });
  } finally {
    hideLoader(loader);
  }
});
