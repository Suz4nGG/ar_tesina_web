import axios from "axios";
import Navigation from "/components/Global/Navigation.jsx";
import Layout from "/components/Global/Layout.jsx";
import { PaperClipIcon } from "@heroicons/react/solid";
import PrevSol from "../components/PrevSol";
import {
  APISTUDENT,
  EDITADAPT,
  INITIAL,
  GETCOMENTARIOS,
} from "../../constants";
import { dateParse } from "../../registro/validations";
import { states } from "../../data";
import { useRouter } from "next/router";
import { createPDF } from "../../../hooks/createPDF";
import Footer from "/components/Global/Footer";
import { useEffect, useState } from "react";
import { Adaptacion } from "../../../components/pdf/Adaptacion";

const Comments = ({ comentarioRecuperado: { comentarios, createdAt } }) => {
  const date = dateParse(createdAt);
  return (
    <div className="flow-root w-full">
      <span className="text-blue-500">Comentarios</span>
      <ul role="list" className="-mb-8">
        <li>
          <div className="relative pb-8">
            <div className="relative flex space-x-3">
              <div className="flex justify-between min-w-0 flex-1 space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-800">{comentarios}</p>
                </div>
              </div>
            </div>
            <div className="whitespace-nowrap text-right text-sm text-green-600">
                  <time dateTime={date}>
                    {date === "Invalid Date"
                      ? "Aún no has recibido comentarios"
                      : `Comentada el ${date}`}
                  </time>
                </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Box = ({ title, description, btnText, comentarioRecuperado }) => {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow truncate" style={{ whiteSpace: "pre" }}>
          {description}
        </span>
      </dd>
      <span className="flex-shrink-0">
        {btnText && comentarioRecuperado ? (
          <div className="">
            <h3 className="text-sm font-medium text-green-700 mt-4">
              Comentario
            </h3>
            <p className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {comentarioRecuperado}
            </p>
          </div>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

const Id = ({ data, comentarioRecuperado }) => {
  const [dataStorage, setDataStorage] = useState();
  const {
    idSolicitud,
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
      description: stateSol[estadoSolicitud],
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
    },
    {
      title: "Formas de respuesta",
      description: respuesta || "",
    },
    {
      title: "Tiempo y horario",
      description: tiempoHorario || "",
    },
    {
      title: "Adaptaciones anteriores",
      description: adapAnteriores || "",
    },
    {
      title: "Motivo de la solicitud",
      description: motSolicitud || "",
    },
  ];
  console.log("DD", dataStorage)
  // Obtener sessionStorage
  useEffect(() => {
    setDataStorage(JSON.parse(sessionStorage.getItem("idU")));
  }, []);
  const { push } = useRouter();
  const [showPDF, setShowPDF] = useState();
  const handleClick = () => {
    push(EDITADAPT + idSolicitud);
  };
  const downloadPDF = () => {
    const prev = true;
    const pdf = createPDF(data, dataStorage, prev);
  };
  const previewPDF = () => {
    setShowPDF(!showPDF);
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
            {dataStorage === undefined || dataStorage === null ? "" : dataStorage.nombreCompleto}
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {dataAdaptacion.map((item) => (
              <Box
                key={item.title}
                title={item.title}
                description={item.description}
                comentarioRecuperado={item.comentarioRec}
                btnText={item.btnText}
              />
            ))}
            <div className="py-4 sm:grid sm:grid-cols-1 sm:gap-4 sm:py-5">
              <Comments comentarioRecuperado={comentarioRecuperado} />
            </div>

            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">
              <dd className="text-sm text-gray-900 sm:col-span-2">
                <button
                  onClick={handleClick}
                  className="rounded-md bg-blue-600 px-4 py-2 my-4 font-medium text-white hover:bg-blue-700 focus:outline-none"
                >
                  Editar
                </button>
              </dd>
              <dt className="text-sm font-medium text-gray-500">Archivos</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li
                    className="grid grid-cols-1
          md:grid-cols-[300px,_1fr] py-3 pl-3 pr-4 text-sm"
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1">
                        {dataStorage === undefined || dataStorage === null
                          ? ""
                          : `AC_${dataStorage.nombreCompleto}`
                              .toLowerCase()
                              .split(" ")
                              .join("_")}
                      </span>
                    </div>
                    <div className="ml-4 mt-4 flex flex-shrink-0 space-x-4 col-span-2">
                      <button
                        type="button"
                        // onClick={pdf}
                        className="rounded-md bg-white font-medium text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-3 py-2"
                      >
                        Descargar
                      </button>
                      <button
                        type="button"
                        onClick={previewPDF}
                        className="rounded-md bg-white font-medium text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-3 py-2"
                      >
                        Visualizar
                      </button>
                    </div>
                  </li>
                </ul>
                <div>
                  {/* PREVISUALIZACIÓN Renderizada por el navegador */}
                  {showPDF ? (
                    <div className="w-full h-screen">
                      <Adaptacion dataS={dataStorage} dataSol={data} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <Footer />
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
  // * Comentarios
  const { data: comentarioRecuperado } = await axios.get(
    INITIAL + GETCOMENTARIOS + context.query.id
  );
  return {
    props: { data, infoUser, comentarioRecuperado },
  };
};
export default Id;
