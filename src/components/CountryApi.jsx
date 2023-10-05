import { useEffect, useState } from "react";
import axios from "axios";

function CountryApi() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const getCountry = () => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          console.log(res.data);
          setCountry(res.data);
        })
        .catch((err) => console.log(err));
    };
    getCountry();
  }, []);
  return (
    <div className="bg-blue-500">
      <div className="grid grid-cols-4 gap-20 p-20 text-white">
        {country?.map((country) => {
          return (
            <div key={country.ccn3} className="space-y-4">
              <img src={country.flags.png} alt="Flag" />
              <p>Country: {country.name.official}</p>
              <p>Population: {country.population}</p>
              <p>Capital: {country.capital}</p>
              <p>Continent: {country.continents}</p>
              <p>Region: {country.region}</p>
              <p>Week: {country.startOfWeek}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Timezones: {country.timezones}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryApi;
