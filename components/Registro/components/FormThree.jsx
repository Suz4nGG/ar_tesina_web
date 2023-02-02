import Select from "react-select";
import { selectOptionsLic } from "../../../data";

const FormThree = ({ data, handleChange }) => {
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
          name="carrera"
          options={selectOptionsLic}
          placeholder="Licenciatura"
          required
        />
      </div>
      {/* <div className="col-span-3 pb-4">
        <label
          htmlFor="adaptaciones"
          className="block text-sm md:text-base font-medium text-gray-700 sm:mt-px pb-2"
        >
          Menciona las adaptaciones que tuviste en tu anterior etapa educativa
          y/o en cursos (Opcional)
        </label>
        <div className="sm:col-span-2">
          <textarea
            onChange={handleChange}
            id="adaptaciones"
            name="adaptaciones"
            value={data.adaptaciones}
            rows={5}
            className="bg-gray-50 block w-full rounded border border-gray-300 py-2 px-2 focus:outline-none focus:border-green-500 focus:ring-green-500 text-sm md:text-base text-gray-700"
            placeholder="Los ajustes curriculares solicitados en mis cursos anteriores..."
          />
        </div>
      </div> */}
    </div>
  );
};

export default FormThree;
