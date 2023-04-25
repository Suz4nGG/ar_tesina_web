import CheckBox from "components/Forms/CheckBox";
import { useEffect, useState } from "react";
import { documentosNecesarios } from "/data";
import axios from "axios";
import Router from "next/router";
import { DASHBOARD_ESTUDIANTE, API_DOCUMENTOS, URL_INICIAL } from "/constants";
import LayoutPA from "../../components/Global/LayoutPA";
import ErrorMessages from "../../components/Messages/ErrorMessages";

const DocumentosObligatorios = () => {
  const [clicBox, setClicBox] = useState(
    new Array(documentosNecesarios.length).fill(false)
  );
  const [error, setError] = useState();
  const [idEstudiante, setIdEstudiante] = useState();
  const [message, setMessage] = useState();
  // const [docs, setDocs] = useState();

  useEffect(() => {
    // * Documentación
    const getSessionStorage = async () => {
      setIdEstudiante(JSON.parse(sessionStorage.getItem("idU")));
    };
    getSessionStorage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateChecks = clicBox.filter((item) => item === false);
    if (!(validateChecks.includes(false) && validateChecks.length > 1)) {
      setError("");
      try {
        await axios.post(URL_INICIAL + API_DOCUMENTOS, {
          docs: clicBox,
          idEstudiante: idEstudiante.id || "",
        });
        setMessage("Datos almacenados correctamente");
      } catch (err) {
        setError("Error en el Servidor");
      }
    } else {
      setError(
        "Debes marcar los documentos que haz proporcionado a tu institución"
      );
    }
  };

  const handleChange = (position) => {
    const updatedCheckedState = clicBox.map((item, index) =>
      index === position ? !item : item
    );
    setClicBox(updatedCheckedState);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    Router.push(DASHBOARD_ESTUDIANTE);
  };
  return (
    <LayoutPA actState="session_student" title="Documentación Necesaria">
      <div className="mb-10 text-base">
        <p className="pb-4 text-gray-800">
          Selecciona la documentación con la que cuentas actualmente
        </p>
        <form
          className="relative rounded text-gray-500"
          onSubmit={handleSubmit}
        >
          <ul>
            {documentosNecesarios.map((item, index) => (
              <li
                key={item.name}
                className="list-none col-span-1 divide-y mt-4 divide-gray-200 rounded bg-white shadow px-4 py-4 my-2"
              >
                <div className="flex-1 truncate py-4">
                  <div className="flex items-center space-x-3">
                    <CheckBox
                      name={item.name}
                      value={item.value}
                      handleChange={() => handleChange(index, item.name)}
                      col="mt-0"
                    />
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <span className="flex-shrink-0 rounded bg-green-200 px-2 py-2 text-xs font-semibold text-green-900">
                      Necesario
                    </span>
                  </div>
                </div>
              </li>
            ))}
            <ErrorMessages
              errors={error || message}
              show={error || message}
              styles={
                error
                  ? "bg-red-200 text-red-900"
                  : "bg-green-200 rounded text-green-900"
              }
            />
          </ul>
          <div className="mt-4">
            <button className="w-full sm:w-36 bg-bgBtn_ py-2 px-5 rounded text-gray-50 ">
              Enviar
            </button>
            <button
              onClick={handleCancel}
              className="w-full sm:w-36 mt-2 sm:mt-0 bg-red-500 ml-0 sm:ml-2 py-2 px-5 rounded text-gray-50 "
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </LayoutPA>
  );
};

// export const getServerSideProps = async (context) => {
//   // * Documentación
//   const { data } = await axios.post(URL_INICIAL + GET_DOCUMENTOS, {
//     idEstudiante: 1,
//   });

//   return {
//     props: {},
//   };
// };

export default DocumentosObligatorios;
