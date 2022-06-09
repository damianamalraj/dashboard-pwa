import { useState, useEffect } from "react";

import Countries from "./Countries";
import Search from "./Search";
import style from "./home.module.css";

const url = "https://restcountries.com/v3.1/all";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setfilterCountries] = useState(countries);

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  const onRemoveCountry = (name) => {
    const filter = filterCountries.filter(
      (country) => country.name.common !== name
    );
    return setfilterCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setfilterCountries(newCountries);
  };
  return (
    <div className={style.container}>
      <h1> Country Home</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading......</h2>}
      {error && <h2> {error.message} </h2>}
      {countries && (
        <Countries
          onRemoveCountry={onRemoveCountry}
          countries={filterCountries}
        />
      )}
    </div>
  );
}

export default Home;
