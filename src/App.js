import Search from "./components/search/Search";
import Currentweather from "./components/currentweather/Currentweather";
import { weatherApiKey } from "./components/api/Api";
import { useState } from "react";

function App() {
  const [currentWeatherForecast, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(searchData.value.split(" "));
    const currentWeatherForecast = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );
    const weatherForecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
      
    );
    Promise.all([currentWeatherForecast, weatherForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setWeatherForecast({ city: searchData.label, ...foreCastResponse });
      })
      .catch((error) => console.log(error));
  };
  console.log(currentWeatherForecast);
  console.log(weatherForecast)
  return (
    <div className="my-5 mx-auto max-w-screen-lg">
      <Search onSearchChange={handleOnSearchChange} />
      <Currentweather />
    </div>
  );
}

export default App;
