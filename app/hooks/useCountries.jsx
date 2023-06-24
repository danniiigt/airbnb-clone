import countries from "world-countries";
const i18nIsoCountries = require("i18n-iso-countries");
i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/es.json"));

const formattedCountries = countries.map((country) => {
  return {
    value: country.cca2,
    label: i18nIsoCountries.getName(country.cca2, "es"),
    flag: country.flag,
    latlng: country.latlng,
    region: country.region === "Europe" ? "Europa" : country.region,
  };
});

console.log(formattedCountries);

export const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value) => {
    return formattedCountries.find((country) => country.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};
