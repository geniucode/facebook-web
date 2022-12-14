import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

const CountrySelector = (props) => {
  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const onChangeCountry = (event) => {
    props.setCountry({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };

  return (
    <select className="country-selector" onChange={onChangeCountry}>
      <option key={""} value={""}></option>
      {!!countryArr?.length &&
        countryArr.map(({ label, value }) => (
          <option key={value} value={label}>
            {label}
          </option>
        ))}
    </select>
  );
};

export { CountrySelector };
