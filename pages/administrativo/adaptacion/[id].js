import axios from "axios";
import Navigation from "/components/Global/Navigation.jsx";
import Layout from "/components/Global/Layout.jsx";
import { PaperClipIcon } from "@heroicons/react/solid";
import { EDITADAPT, APIPERSONAL, APISTUDENT } from "../../constants";
import { dateParse } from "../../registro/validations";
import { states } from "../../data";
import { useRouter } from "next/router";
import { createPDF } from "../../../hooks/createPDF";
import Footer from "/components/Global/Footer";
import { useState } from "react";
import TextArea from "../../estudiante/components/TextArea";

const Box = ({ title, description, btnText, nameInput }) => {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(!showInput);
  };
  const handleChange = ({target: {name, value}}) => {
    console.log(name, value)
  }
  return (
    <>
      <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span className="flex-grow truncate" style={{ whiteSpace: "pre" }}>
            {description}
          </span>
        </dd>
      </div>
      <span className="mt-4 mb-4 flex-shrink-0 w-full">
        {btnText ? (
          <div className="py-4">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none"
              onClick={handleClick}
              style={
                showInput
                  ? { background: "#B71010" }
                  : { background: "#1B539E" }
              }
            >
              {showInput ? "Cerrar" : "Comentar"}
            </button>
            <form>
              {showInput ? (
                <>
                  <TextArea
                    label="Deja tus comentarios"
                    name={nameInput}
                    placeholder="Comenta sobre tus observaciones"
                    handleChange={handleChange}
                  />
                  <button
                    type="button"
                    className="rounded-md bg-green-600 px-4 py-2 my-2 font-medium text-white hover:bg-green-700 focus:outline-none"
                  >
                    Guardar
                  </button>{" "}
                </>
              ) : (
                ""
              )}
            </form>
          </div>
        ) : (
          ""
        )}
      </span>
    </>
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
  // console.log("rr", stateSol[estadoSolicitud]);
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
      btnText: true,
      nameInput: 'comentarioInfo'
    },
    {
      title: "Formas de respuesta",
      description: respuesta || "",
      btnText: true,
      nameInput: 'comentarioResp'
    },
    {
      title: "Tiempo y horario",
      description: tiempoHorario || "",
      btnText: true,
      nameInput: 'comentarioTH'
    },
    {
      title: "Adaptaciones anteriores",
      description: adapAnteriores || "",
      btnText: true,
      nameInput: 'comentarioAA'
    },
    {
      title: "Motivo de la solicitud",
      description: motSolicitud || "",
      btnText: true,
      nameInput: 'comentarioMS'
    },
  ];
  const { push } = useRouter();
  const downloadPDF = () => {
    const prev = true;
    createPDF(data, infoUser, prev);
  };
  const previewPDF = () => {
    const prev = true;
    const pdf = createPDF({ data }, { infoUser }, prev);
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
            {infoUser.nombreCompleto}
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {dataAdaptacion.map((item) => (
              <Box
                key={item.title}
                title={item.title}
                description={item.description}
                btnText={item.btnText}
                nameInput={item.nameInput}
              />
            ))}
            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">
              <dd className="mt-1 mb-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
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
                <iframe id="frame" src=""></iframe>
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
  // * Solicitud
  const { data } = await axios.get(APIPERSONAL + "/" + context.query.id);
  const usernameEstudiante = data.username;
  // * Información del estudiante
  const { data: infoUser } = await axios.post(
    APIPERSONAL + "/" + context.query.id,
    { usernameEstudiante }
  );
  return {
    props: { data, infoUser },
  };
};
export default Id;
