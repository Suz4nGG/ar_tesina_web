import ContainerForm from "/components/Forms/ContainerForm";
import Button from "../../../components/Global/Button";

const selectOptions = [
  {
    name: "Redes y Servicios de Cómputo"
  }
]
const FormThree = () => {
  return (
      <div className="w-full grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-3 lg:grid-cols-2 px-4 sm:p-0">
        <div className="col-span-2 lg:col-span-1">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Licenciatura que se encuentra cursando o que está próximo a cursar
          </label>
          <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 text-sm md:text-base">
            {
              selectOptions.map((opt) => (
                <option key={opt.name} className="px-2">
                  {opt.name}
                </option>
              ))
            }
          </select>
        </div>
        <div className="col-span-3 pt-4">
          <label htmlFor="about" className="block text-sm md:text-base font-medium text-gray-700 sm:mt-px pb-2">
                Menciona las adaptaciones que tuviste en tu anterior etapa educativa y/o en cursos (Opcional)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <textarea
              id="about"
              name="about"
              rows={5}
              className="block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm md:text-base p-4"
              defaultValue={''}
              placeholder="Los ajustes curriculares solicitados en mis cursos anteriores..."
            />
          </div>
        </div>
        <div className="col-span-3 pt-4 block md:flex justify-center">
          <Button bg="bg-green-600" textColor="text-gray-100" text="Envíar" href="#"/>
        </div>
      </div>
  );
}

export default FormThree;
