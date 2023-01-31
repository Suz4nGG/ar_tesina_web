import Layout from "../../components/Global/Layout";
import Navigation from "../../components/Global/Navigation";
import CheckBox from "../../components/Forms/CheckBox";
import { useEffect, useState } from "react";
import Footer from "/components/Global/Footer";
import { documentosNecesarios } from "./utils/dataDocumentos";
import axios from "axios";
import Router from "next/router";
import { DASHSTUDENT } from "../constants";
const DocumentosObligatorios = () => {
  const [clicBox, setClicBox] = useState(
    new Array(documentosNecesarios.length).fill(false)
  );
  const [idEstudiante, setIdEstudiante] = useState();
  useEffect(() => {
    setIdEstudiante(localStorage.getItem("idU"));
  }, [idEstudiante]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = await axios.post(
      "http://localhost:3000/api/estudiante/docs-solicitados",
      { docs: clicBox, idEstudiante }
    );
    console.log(re);
  };

  const handleChange = (position) => {
    const updatedCheckedState = clicBox.map((item, index) =>
      index === position ? !item : item
    );
    setClicBox(updatedCheckedState);
  };

  const handleCancel = (e) => {
    e.preventDefault()
    Router.push(DASHSTUDENT)
  }
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Documentos Obligatorios` }}>
        <div className="mb-10">
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
                  style={{ listStyle: "none" }}
                  className="col-span-1 divide-y mt-4 divide-gray-200 rounded bg-white shadow
              px-4 py-4
              "
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
                  {/* <div>
                    <div className="flex w-0 flex-1">
                      <div className="relative inline-flex w-0 flex-1 rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                        <CheckBox
                          text=""
                          name={item.name}
                          value={item.value}
                          handleChange={() => handleChange(index, item.name)}
                        />
                      </div>
                    </div>
                  </div> */}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button className="w-full sm:w-36 bg-green-600 py-2 px-5 rounded text-gray-50 ">
                Enviar
              </button>
              <button onClick={handleCancel} className="w-full sm:w-36 mt-4 sm:mt-0 bg-red-600 ml-0 sm:ml-2 py-2 px-5 rounded text-gray-50 ">
                Cancelar
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default DocumentosObligatorios;
