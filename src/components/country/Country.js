import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const country = props.country;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Name: {name.common}</h3>

        <h3>Capital: {capital}</h3>

        <button
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
          className={style.btn}
        >
          Remove country
        </button>
      </div>
    </article>
  );
};

export default Country;
