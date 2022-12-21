import ContainerForm from "../../../components/Forms/ContainerForm";
// import GroupForm from "../../../components/Forms/GroupForm";
import UseForms from "../../../hooks/useForms";
import { useForm } from "react-hook-form";
import { usePageContext } from "../../context/pagesContext";

const dataForm = [
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "nombreCompleto",
    text: "Nombre Completo",
    placeholder: "Nombre Completo"
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "nombreResponsable",
    text: "Nombre del tutor o responsable",
    placeholder: "Nombre del tutor o responsable"
  },
  {
    col: 3,
    colQuery: 3,
    type: "date",
    name: "fecNacimiento",
    text: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento"
  },
  {
    col: 1,
    colQuery: 2,
    type: "number",
    name: "edad",
    text: "Edad",
    placeholder: "Edad"
  },
  {
    col: 3,
    colQuery: 3,
    type: "tel",
    name: "tel",
    text: "Teléfono",
    placeholder: "Teléfono"
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "ciudad",
    text: "Ciudad",
    placeholder: "Ciudad"
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "municipio",
    text: "Municipio",
    placeholder: "Municipio"
  },
  {
    col: 2,
    colQuery: 2,
    type: "number",
    name: "cp",
    text: "Código Postal",
    placeholder: "Código Postal"
  }
]

const GroupForm = ({ name, text, placeholder, ref, type, col, colQuery, register }) => {
  return (
    <div className={`col-span-${col} md:col-span-${col}`}>
      <label
        htmlFor={name}
        className="block text-sm md:text-base font-medium text-gray-700"
      >
        {text}
      </label>
      <div className="mt-1">
        <input
          {...register(
            name,
              {
                required: true,
                message: "sss"
              }
            )
          }
        placeholder={placeholder}
        type={type}
        id={name}
        className="py-3 px-2 flex-1 rounded-r-md
          block w-full rounded-md border-2 border-gray-200
        focus:border-indigo-500 focus:ring-indigo-500
          text-sm md:text-base"
      />
      </div>
    </div>
  );
}

const FormOne = ({register}) => {
  return (
      <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-6 lg:grid-cols-6 px-4 sm:p-0">
        {
          dataForm.map((item) => (
            <GroupForm
              register={register}
              key={item.name}
              col={item.col}
              type={item.type}
              name={item.name}
              text={item.text}
              colQuery={item.colQuery}
              placeholder={item.placeholder}
            />
          ))
      }
      </div>
  );
}

export default FormOne;
