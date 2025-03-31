export async function fetchWeatherData(baseUrl, city) {
  const API_KEY = "4533ba6e0dc8e44af92c0107e1c0911c";
  const url = `${baseUrl}?q=${city}&appid=${API_KEY}&lang=ua&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`, url);
  }

  return await response.json();
}
