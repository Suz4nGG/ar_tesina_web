import axios from "axios";
import Navigation from "/components/Global/Navigation.jsx";
import Layout from "/components/Global/Layout.jsx";
import { PaperClipIcon } from "@heroicons/react/solid";
import { APISTUDENT, EDITADAPT, INITIAL, GETCOMENTARIOS } from "/constants";
import { dateParse } from "validations";
import { states } from "data";
import { useRouter } from "next/router";
import Footer from "/components/Global/Footer";
import { useEffect, useState } from "react";
import { Adaptacion } from "/components/pdf/Adaptacion";
import {
  usePDF,
  pdf,
  PDFDownloadLink,
  BlobProvider,
} from "@react-pdf/renderer";
import { PDF } from "/components/pdf/Adaptacion";
import dynamic from "next/dynamic";

const Comments = ({ comentarioRecuperado: { comentarios, createdAt } }) => {
  const date = dateParse(createdAt);
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 break-words">
      <dt className="text-sm font-medium text-gray-600">Comentarios</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow text-ellipsis overflow-auto">
          {comentarios}
        </span>
      </dd>
      <dd className="mt-4 whitespace-nowrap w-full text-left text-sm text-green-600">
        <time dateTime={date}>
          {date === "Invalid Date"
            ? "Aún no has recibido comentarios"
            : `Comentario realizado el ${date}`}
        </time>
      </dd>
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

/* const InvocePDF = dynamic(() => import("./pdf"), {
  ssr: false,
}); */

const Id = ({ data, comentarioRecuperado, blob }) => {
  const [client, setClient] = useState(false);
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
  // Obtener sessionStorage
  useEffect(() => {
    setDataStorage(JSON.parse(sessionStorage.getItem("idU")));
  }, []);
  const { push } = useRouter();
  const [showPDF, setShowPDF] = useState();
  const handleClick = () => {
    push(EDITADAPT + idSolicitud);
  };

  const handleDownloadPDF = async () => {
    const blob = await pdf(
      <Adaptacion dataS={dataStorage} dataSol={data} />
    ).toBlob();
    console.log("BLOB", blob);
  };
  const previewPDF = () => {
    setShowPDF(!showPDF);
  };
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Adaptación Curricular: ${idSolicitud}` }}>
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Detalles de la solicitud
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {dataStorage === undefined || dataStorage === null
              ? ""
              : dataStorage.nombreCompleto}
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
                  <li className="grid grid-cols-1 py-3 pl-3 pr-4 text-sm">
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
                      {client ? (
                        <PDFDownloadLink
                          document={<PDF dataS={dataStorage} dataSol={data} />}
                          fileName={`AC_${dataStorage.nombreCompleto}`
                            .toLowerCase()
                            .split(" ")
                            .join("_")}
                        >
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-3 py-2"
                          >
                            {"DESCARGAR"}
                          </button>
                        </PDFDownloadLink>
                      ) : (
                        ""
                      )}
                      <button
                        type="button"
                        onClick={previewPDF}
                        className="hidden sm:block rounded-md bg-white font-medium text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-3 py-2"
                      >
                        VISUALIZAR
                      </button>
                    </div>
                  </li>
                </ul>
                <div>
                  {showPDF ? (
                    <div className="w-full h-screen">
                      <Adaptacion dataS={dataStorage} dataSol={data} />
                    </div>
                  ) : (
                    ""
                  )}{" "}
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
