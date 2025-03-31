export function renderResult(container, data) {
    if (data.error) {
      container.textContent = `Error: ${data.error}`;
      return;
    }
  
    const {
      main: { temp, humidity },
      weather,
      wind: { speed },
      name,
    } = data;
  
    container.textContent = JSON.stringify(
      {
        City: name,
        Temperature: `${temp} °C`,
        Description: weather[0].description,
        Wind: `${speed} m/s`,
        Humidity: `${humidity}%`,
      },
      null,
      2
    );
  }
  