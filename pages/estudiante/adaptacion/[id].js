import axios from "axios";
import Navigation from "/components/Global/Navigation.jsx";
import Layout from "/components/Global/Layout.jsx";
import { PaperClipIcon } from "@heroicons/react/solid";
import { APISTUDENT, EDITADAPT } from "../../constants";
import { useState } from "react";
import { dateParse } from "../../registro/validations";
import { states } from "../../data";
import { useRouter } from "next/router";
import { createPDF } from "../../../hooks/createPDF";

const Box = ({ title, description, btnText }) => {
  // if (description.split("\n")) {
  //   console.log(description.split("\n").length)
  // }
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow truncate" style={{ whiteSpace: "pre" }}>
          {description}
        </span>
        <span className="ml-4 flex-shrink-0">
          {btnText ? (
            <button
              type="button"
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none"
            >
              Editar
            </button>
          ) : (
            ""
          )}
        </span>
      </dd>
    </div>
  );
};

const Id = ({ data, infoUser }) => {
  const {
    idSolicitud,
    username,
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
    createdAt,
    estadoSolicitud,
  } = data;
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const dataAdaptacion = [
    {
      title: "Estado",
      description: stateSol[estadoSolicitud] || "",
    },
    {
      title: "Experiencia Educativa",
      description: experienciaR || "",
    },
    {
      title: "Creación",
      description: dateParse(createdAt),
    },
    {
      title: "Presentación de la información",
      description: informacion || "",
      btnText: true,
    },
    {
      title: "Formas de respuesta",
      description: respuesta || "",
      btnText: true,
    },
    {
      title: "Tiempo y horario",
      description: tiempoHorario || "",
      btnText: true,
    },
    {
      title: "Adaptaciones anteriores",
      description: adapAnteriores || "",
      btnText: true,
    },
    {
      title: "Motivo de la solicitud",
      description: motSolicitud || "",
    },
  ];
  const { push } = useRouter();
  const handleClick = () => {
    push(EDITADAPT + idSolicitud);
  };
  const downloadPDF = () => {
    const pdf = createPDF({ data }, {infoUser});
    console.log("PDF", pdf);
  };
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Adaptación Curricular: ${idSolicitud}` }}>
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Detalles de la solicitud
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Nombre Completo
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {dataAdaptacion.map((item) => (
              <Box
                key={item.title}
                title={item.title}
                description={item.description}
                // btnText={item.btnText}
              />
            ))}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dd className="mt-1 mb-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <button
                  onClick={handleClick}
                  className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none"
                >
                  Editar Solicitud
                </button>
              </dd>
              <dt className="text-sm font-medium text-gray-500">Archivos</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1 truncate">
                        adaptacion_curricular_nombre.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex flex-shrink-0 space-x-4">
                      <button
                        type="button"
                        onClick={downloadPDF}
                        className="rounded-md bg-white font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Descargar
                      </button>
                      <button
                        type="button"
                        onClick={downloadPDF}
                        className="rounded-md bg-white font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Visualizar
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    APISTUDENT + "/adaptacion/" + context.query.id
  );
  const { authTokenUser } = context.req.cookies;
  const { data: infoUser } = await axios.post(APISTUDENT, {
    authTokenUser,
  });
  return {
    props: { data, infoUser },
  };
};
export default Id;
