import React from "react";

function Weather({ data }) {
  if (data.cod !== 200) {
    return <p>❌ City not found</p>;
  }

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬 Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
