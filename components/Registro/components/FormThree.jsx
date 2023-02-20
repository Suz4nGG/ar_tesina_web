import Select from "react-select";
import { selectOptionsLic } from "../../../data";

const FormThree = ({ handleChange }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-3 lg:grid-cols-2 px-4 sm:p-0">
      <div className="col-span-3 lg:col-span-1">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          Licenciatura que se encuentra cursando o que está próximo a cursar{" "}
          <span className="text-red-600">*</span>
        </label>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              height: "47px",
              marginTop: "5px",
            }),
          }}
          onChange={handleChange}
          name={selectOptionsLic}
          options={selectOptionsLic}
          placeholder="Licenciatura"
          required
        />
      </div>
    </div>
  );
};

export default FormThree;
