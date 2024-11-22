import React, { useEffect, useState } from "react";
import Clock from "./clock";

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
    <div
      id="box"
      className="h-full flex flex-wrap items-center w-1/4 text-white bg-purplepink/75"
    >
      <img src={sourceImage} alt="Weather image" />
      <Clock />
      <div className="w-full flex ml-4">
        <h2 className="font-bold text-3xl ">{temperature}°C</h2>
      </div>
    </div>
  );
};

export default Weatherapi;
