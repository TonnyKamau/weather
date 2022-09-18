import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoOptions } from "../api/Api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOption = async (inputValue) => {
    try {
          const response = await fetch(
              `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
              geoOptions
          );
          const response_1 = await response.json();
          return {
              options: response_1.data.map((city) => {
                  return {
                      value: `${city.latitude} ${city.longitude}`,
                      label: `${city.name} ${city.countryCode}`,
                  };

              })
          };
      } catch (err) {
          return console.error(err);
      }
  };
  return (
    <AsyncPaginate
      placeholder="search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOption}
    />
  );
};

export default Search;
