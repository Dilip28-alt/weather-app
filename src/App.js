import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = "ca3e7b41032c87418b9bd3131c395836"; // replace with your key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&mode=cors`;


    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data); // 👀 check actual error
      setWeatherData(data);

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <Search onSearch={fetchWeather} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
