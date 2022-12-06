import ContainerForm from "/components/Forms/ContainerForm";

const selectOptions = [
  {
    name: "Auditiva"
  },
  {
    name: "Baja visión"
  },
  {
    name: "Motor"
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
    name: "Permanente", id: "permanente"
  },
  {
    name: "Temporal", id: "temporal"
  }
]

const FormTwo = () => {
  return (
    <ContainerForm>
      <div className="mt-6 w-full grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-2 lg:grid-cols-2 px-4 sm:p-0">
        <div className="col-span-3">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Tipo de discapacidad
          </label>
          <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm">
            {
              selectOptions.map((opt) => (
                <option key={opt.name} className="px-2">
                  {opt.name}
                </option>
              ))
            }
          </select>
        </div>
        <div className="mt-4 space-y-4 col-span-3 md:col-span-3">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-gray-500"
              />
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Permanente
              </label>
            </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerForm>
  );
}

export default FormTwo;
