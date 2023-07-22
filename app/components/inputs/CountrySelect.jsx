import { useCountries } from "@/app/hooks/useCountries";
import { useRentForm } from "@/app/hooks/useRentForm";
import Select from "react-select";

export const CountrySelect = ({ value, onChange }) => {
  const { getAll } = useCountries();
  const { setFormData, formData } = useRentForm();

  const handleCountryChange = (country) => {
    setFormData({ location: country });
  };

  return (
    <Select
      placeholder="Selecciona un país"
      isClearable
      options={getAll()}
      value={value}
      onChange={(value) => {
        onChange?.(value);
        handleCountryChange();
      }}
      formatOptionLabel={(option) => (
        <div className="flex items-center gap-3">
          <div>{option.flag}</div>
          <div>
            {option.label},
            <span className="text-neutral-500 ml-1">{option.region}</span>
          </div>
        </div>
      )}
      classNames={{
        control: () => "p-3 border-2",
        input: () => "text-lg",
        option: () => "text-lg",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: "#f43f5e",

          // LIGHTER ONES
          primary25: "#fde8ec",
          primary50: "#fbd1d7",
          primary75: "#f8b9c2",
        },
      })}
    />
  );
};
