import Search from "./components/search/Search";
import Currentweather from "./components/currentweather/Currentweather";
import { weatherApiKey } from "./components/api/Api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeatherForecast, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const weatherForecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );
    Promise.all([currentWeather, weatherForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setDailyForecast({ city: searchData.label, ...foreCastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(dailyForecast);
  return (
    <div className="my-5 mx-auto max-w-screen-lg">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeatherForecast && (
        <Currentweather data={currentWeatherForecast} />
      )}
      {dailyForecast && <Forecast data={dailyForecast} />}
    </div>
  );
}

export default App;
