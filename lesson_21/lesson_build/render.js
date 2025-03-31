"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderResult = renderResult;
function renderResult(container, data) {
  if (data.error) {
    container.textContent = "Error: ".concat(data.error);
    return;
  }
  var _data$main = data.main,
    temp = _data$main.temp,
    humidity = _data$main.humidity,
    weather = data.weather,
    speed = data.wind.speed,
    name = data.name;
  container.textContent = JSON.stringify({
    City: name,
    Temperature: "".concat(temp, " \xB0C"),
    Description: weather[0].description,
    Wind: "".concat(speed, " m/s"),
    Humidity: "".concat(humidity, "%")
  }, null, 2);
}