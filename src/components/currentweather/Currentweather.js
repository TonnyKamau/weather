import React from "react";

const Currentweather = ({ data }) => {
  return (
    <div className="w-80 rounded-xl shadow-2xl text-white mt-5 mx-auto mb-0 bg-slate-700 pt-0 pb-5 px-5">
      <div className="flex justify-between items-center">
        <div className="">
          <p className="font-semibold text-xl leading-none m-0 tracking-wide">
            {data.city}
          </p>
          <p className="text-sm leading-none m-0 font-normal">
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="w-28"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-7xl w-auto tracking-tighter my-2,5 mx-0">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="w-full pl-5">
          <div className="flex justify-between">
            <span className="text-left font-semibold text-xs">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Feels like</span>
            <span className="text-right font-semibold text-xs">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Wind</span>
            <span className="text-right font-semibold text-xs">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Humidity</span>
            <span className="text-right font-semibold text-xs">
              {data.main.humidity} %
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Pressure</span>
            <span className="text-right font-semibold text-xs">
              {data.main.pressure} hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
