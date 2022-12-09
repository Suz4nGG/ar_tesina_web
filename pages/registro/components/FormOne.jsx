import ContainerForm from "../../../components/Forms/ContainerForm";
import GroupForm from "../../../components/Forms/GroupForm";
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

const FormOne = () => {
  const { setContextValue } = usePageContext()
  return (
      <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-6 lg:grid-cols-6 px-4 sm:p-0">
        {
          dataForm.map((item) => (
            <GroupForm
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
