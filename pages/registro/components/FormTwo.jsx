import ContainerForm from "/components/Forms/ContainerForm";
import CheckBox from "../../../components/Forms/CheckBox";
const selectOptions = [
  {
    name: "Auditiva"
  },
  {
    name: "Baja visión"
  },
  {
    name: "Motora"
  },
  {
    name: "Psíquica"
  },
  {
    name: "Salud"
  }
]

const boxOption = [
  {
    text: "Permanente", name: "permanente", col: 3
  },
  {
    text: "Temporal", name: "temporal", col: 3, classs: "ml-0 md:ml-4"
  }
]

const FormTwo = ({register}) => {
  return (
      <div className="w-full grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-3 lg:grid-cols-2 px-4 sm:p-0">
        <div className="col-span-3 md:col-span-1">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Tipo de discapacidad
          </label>
          <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 text-sm md:text-base" {...register("tipoDiscapacidad")}>
            {
              selectOptions.map((opt) => (
                <option
                  value={opt.name}
                  key={opt.name}
                  className="px-2">
                  {opt.name}
                </option>
              ))
            }
          </select>
        </div>
        <fieldset className="block md:flex items-center col-span-3">
          <legend></legend>
          {
            boxOption.map((opt) => (
                <CheckBox
                key={opt.name}
                text={opt.text}
                name={opt.name}
                col={opt.col}
                classs={opt.classs}
                register={register}
              />
            ))
          }
        </fieldset>
        <div className="col-span-3 pt-4">
          <label htmlFor="sobreDiscapacidad" className="block text-sm md:text-base font-medium text-gray-700 sm:mt-px pb-2">
                Puedes brindar datos extra sobre tu discapacidad (Opcional)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <textarea
              id="sobreDiscapacidad"
              name="sobreDiscapacidad"
              {...register("sobreDiscapacidad")}
              rows={5}
              className="block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm md:text-base p-4"
              defaultValue={''}
              placeholder="Sobre mi discapacidad..."
            />
          </div>
        </div>
      </div>
  );
}

export default FormTwo;
