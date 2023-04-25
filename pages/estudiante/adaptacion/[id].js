import axios from "axios";
import {
  API_ESTUDIANTE,
  EDITAR_ADAPTACION,
  URL_INICIAL,
  GET_COMENTARIOS,
} from "/constants";
import { dateParse } from "validations";
import { states } from "data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PDFComponent from "components/PDF/PDFComponent";
import ErrorMessages from "../../../components/Messages/ErrorMessages";
import LayoutPA from "../../../components/Global/LayoutPA";

const Comments = ({ comentarioRecuperado: { comentarios, createdAt } }) => {
  const date = dateParse(createdAt);
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 break-words">
      <dt className="text-sm font-medium text-bgBac">Comentarios</dt>
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

const Id = ({ data, comentarioRecuperado }) => {
  const [dataStorage, setDataStorage] = useState();
  const [notStorage, setNotStorage] = useState(false);
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
  const handleClick = () => {
    push(EDITAR_ADAPTACION + idSolicitud);
  };

  return (
    <LayoutPA
      actState="session_student"
      title={`Adaptación Curricular: ${idSolicitud}`}
    >
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
                className="rounded-md bg-bgBtn__ px-4 py-2 my-4 font-medium text-white hover:bg-blue-700 focus:outline-none"
              >
                Editar
              </button>
            </dd>
            <div className="text-sm text-gray-900 sm:col-span-2">
              {dataStorage === undefined || dataStorage === null ? (
                <ErrorMessages
                  errors="Vuelve a iniciar sesión si tu solicitud en formato PDF no es visible"
                  show={true}
                  styles={"bg-yellow-200 text-yellow-700 font-semibold"}
                />
              ) : (
                <PDFComponent
                  dataSolicitud={data}
                  dataEstudiante={dataStorage}
                />
              )}
            </div>
          </div>
        </dl>
      </div>
    </LayoutPA>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    URL_INICIAL + API_ESTUDIANTE + "/adaptacion/" + context.query.id
  );
  const { authTokenUser } = context.req.cookies;
  const { data: infoUser } = await axios.post(URL_INICIAL + API_ESTUDIANTE, {
    authTokenUser,
  });
  // * Comentarios
  const { data: comentarioRecuperado } = await axios.get(
    URL_INICIAL + GET_COMENTARIOS + context.query.id
  );
  return {
    props: { data, infoUser, comentarioRecuperado },
  };
};
export default Id;
