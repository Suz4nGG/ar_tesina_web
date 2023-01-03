import CheckBox from "../../../components/Forms/CheckBox";
import Select from "react-select";
import { selectOptionsDis, boxOption } from "../data";

const FormTwo = ({ data, handleChange }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-3 lg:grid-cols-2 px-4 sm:p-0">
      <div className="col-span-3 md:col-span-1">
        <label className="block text-sm sm:text-base font-medium text-gray-700">
          Tipo de discapacidad <span className="text-red-600">*</span>
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
          name="tipoDiscapacidad"
          options={selectOptionsDis}
          placeholder="Discapacidad"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className="col-span-3 md:col-span-2 flex items-center">
        <fieldset className="block md:flex items-center">
          <legend></legend>
          {boxOption.map((opt) => (
            <CheckBox
              col={opt.col}
              key={opt.name}
              text={opt.text}
              name={opt.name}
              classs={opt.classs}
              value={opt.name}
              handleChange={handleChange}
            />
          ))}
        </fieldset>
      </div>
      <div className="col-span-3">
        <label
          htmlFor="sobreDiscapacidad"
          className="block text-sm md:text-base font-medium text-gray-700 pb-2"
        >
          Puedes brindar datos extra sobre tu discapacidad (Opcional)
        </label>
        <div className="sm:col-span-2 pb-4">
          <textarea
            onChange={handleChange}
            id="sobreDiscapacidad"
            name="sobreDiscapacidad"
            rows={5}
            className="bg-gray-50 block w-full rounded border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-green-500 text-sm md:text-base text-gray-700 px-2 py-2"
            placeholder="Sobre mi discapacidad..."
            value={data.sobreDiscapacidad}
          />
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
