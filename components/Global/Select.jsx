import ErrorMessages from "components/Messages/ErrorMessages";
import Select from "react-select";
import { statesPersonal } from "/data";
export const SelectN = ({
  handleChangeEstados,
  handleChangeActualizar,
  message,
  showMessage,
}) => {
  return (
    <div>
      <div className="col-span-3 lg:col-span-1">
        <label className="block text-sm text-gray-900 font-medium">
          Actualizar el estado de la solicitud
        </label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              height: "47px",
              marginTop: "5px",
            }),
          }}
          onChange={handleChangeEstados}
          name="carrera"
          options={statesPersonal}
          placeholder="Estado de la solicitud"
          required
        />
        <button
          type="button"
          onClick={handleChangeActualizar}
          className="rounded-md mt-4 px-4 py-2 font-medium text-white focus:outline-none"
          style={{ background: "#1B539E" }}
        >
          Actualizar
        </button>
        <div>
          <ErrorMessages
            errors={message[0]}
            show={showMessage}
            styles={message[1] ? message[1] : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectN;
