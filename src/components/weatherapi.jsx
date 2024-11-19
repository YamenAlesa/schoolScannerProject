import React, { useEffect, useState } from "react";

const Weatherapi = () => {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [sourceImage, setSourceImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function RetrieveWeatherData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=59.223&lon=17.940&appid=7bc9dfab109c71907dcccd149d6b04c5"
      );
      const data = await response.json();
      const tempKelvin = data.main.temp;
      const tempCelsius = Math.round(tempKelvin - 273.15);
      const descriptionWeather = data.weather[0].description;
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(data);
      setWeather(descriptionWeather);
      setTemperature(tempCelsius);
      setCity(data.name);
      setSourceImage(iconUrl);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    RetrieveWeatherData();
  }, []);
  return (
    <div>
      <div
        className="flex justify-center items-center rounded-md w-72"
        id="weather-display"
      >
        <img src={sourceImage} alt="Weather image" />
        <h2 className="font-bold text-2xl text-white">{temperature}°C</h2>
      </div>
    </div>
  );
};

export default Weatherapi;
