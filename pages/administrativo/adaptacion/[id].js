import axios from "axios";
import Navigation from "/components/Global/Navigation.jsx";
import Layout from "/components/Global/Layout.jsx";
import { PaperClipIcon } from "@heroicons/react/solid";
import {
  APIPERSONAL,
  COMENTARADAP,
  INITIAL,
  CHANGESTATE,
  GETCOMENTARIOS,
} from "../../constants";
import { dateParse, normalizeText } from "../../registro/validations";
import { states } from "../../data";
import Router, { useRouter } from "next/router";
import { createPDF } from "../../../hooks/createPDF";
import Footer from "/components/Global/Footer";
import { useState } from "react";
import TextArea from "../../estudiante/components/TextArea";
import Select from "react-select";
import { statesPersonal, dataProfesores } from "../../data";
import Contrato from "../components/Contrato";

const Box = ({
  title,
  description,
  btnText,
  nameInput,
  id,
  changeState,
  comentarioRecuperado,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [comentarios, setComentarios] = useState({ idSolicitud: id });
  const [getComentarios, setGetComentarios] = useState();
  const handleClick = () => {
    setShowInput(!showInput);
  };
  const handleChange = ({ target: { name, value } }) => {
    setComentarios({ ...comentarios, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enviarCom = await axios.post(INITIAL + COMENTARADAP, comentarios);
    setGetComentarios(enviarCom.data);
  };
  return (
    <>
      <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 break-words">
        <dt className="text-sm font-medium text-gray-600">{title}</dt>
        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span className="flex-grow truncate" style={{ whiteSpace: "pre" }}>
            {title === "Estado" && changeState ? changeState : description}
          </span>
        </dd>
      </div>
      <span className="mt-4 mb-4 flex-shrink-0 w-full">
        {btnText ? (
          <div className="py-4">
            <button
              type="button"
              className="rounded-md px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none"
              onClick={handleClick}
              style={
                showInput
                  ? { background: "#B71010" }
                  : { background: "#1B539E" }
              }
            >
              {showInput ? "Cerrar" : "Comentar"}
            </button>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">
                Comentarios realizados
              </h3>
              <p className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {getComentarios === undefined
                  ? comentarioRecuperado
                  : getComentarios}
              </p>
            </div>
            {showInput ? (
              <>
                <form onSubmit={handleSubmit}>
                  <TextArea
                    label="Deja tus comentarios"
                    name={nameInput}
                    placeholder="Comenta sobre tus observaciones"
                    // value={comentarioRecuperado}
                    handleChange={handleChange}
                  />
                  <button className="rounded-md bg-green-600 px-4 py-2 my-2 font-medium text-white hover:bg-green-700 focus:outline-none">
                    Guardar
                  </button>
                </form>
              </>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </span>
    </>
  );
};

const Id = ({ data, infoUser, comentarioRecuperado }) => {
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
  // ! Estado de la solicitud
  const stateSol = states.find((item) => item[estadoSolicitud]);
  // ! Responsables
  const experienciaE = normalizeText(experienciaR).toLowerCase()
  const responsablesS = dataProfesores.find(item => item.ee === experienciaE).profesor

  const [estado, setEstado] = useState({});
  const [nuevoEstado, setNuevoEstado] = useState();
  const [contrato, setShowContrato] = useState(false);

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
      title: "Responsables",
      description: responsablesS || "",
    },
    {
      title: "Creación",
      description: dateParse(createdAt),
    },
    {
      title: "Presentación de la información",
      description: informacion || "",
      btnText: true,
      nameInput: "comentarioInfo",
      comentarioRec: comentarioRecuperado.comentarioInfo,
    },
    {
      title: "Formas de respuesta",
      description: respuesta || "",
      btnText: true,
      nameInput: "comentarioResp",
      comentarioRec: comentarioRecuperado.comentarioResp,
    },
    {
      title: "Tiempo y horario",
      description: tiempoHorario || "",
      btnText: true,
      nameInput: "comentarioTH",
      comentarioRec: comentarioRecuperado.comentarioTH,
    },
    {
      title: "Adaptaciones anteriores",
      description: adapAnteriores || "",
      btnText: true,
      nameInput: "comentarioAA",
      comentarioRec: comentarioRecuperado.comentarioAA,
    },
    {
      title: "Motivo de la solicitud",
      description: motSolicitud || "",
      btnText: true,
      nameInput: "comentarioMS",
      comentarioRec: comentarioRecuperado.comentarioMS,
    },
  ];
  const router = useRouter();
  const downloadPDF = () => {
    const prev = true;
    createPDF(data, infoUser, prev);
  };
  const previewPDF = () => {
    const prev = true;
    const pdf = createPDF({ data }, { infoUser }, prev);
  };

  const handleChangeEstados = (e) => {
    setEstado({ ...estado, e });
  };

  const handleChangeActualizar = async () => {
    const res = await axios.post(INITIAL + CHANGESTATE, {
      estado,
      idSolicitud: router.query.id,
    });
    setNuevoEstado(res.data);
  };
  const showContrato = () => {
    setShowContrato(!contrato);
  };
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Adaptación Curricular: ${idSolicitud}` }}>
        <div>
          <div className="col-span-3 lg:col-span-1">
            <label className="block text-sm text-gray-900 font-medium">
              Actualizar el estado de la solicitud
            </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  height: "47px",
                  marginTop: "5px",
                }),
              }}
              onChange={handleChangeEstados}
              name="carrera"
              options={statesPersonal}
              placeholder="Estado de la solicitud"
              required
            />
            <button
              type="button"
              onClick={handleChangeActualizar}
              className="rounded-md mt-4 px-4 py-2 font-medium text-white focus:outline-none"
              style={{ background: "#1B539E" }}
            >
              Actualizar
            </button>
          </div>
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
                id={router.query.id}
                changeState={nuevoEstado}
                comentarioRecuperado={item.comentarioRec}
              />
            ))}
            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">
                Adaptación curricular del estudiante
              </dt>
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
                    </div>
                  </li>
                </ul>
              </dd>
              <dd className="mt-1 mb-2 text-gray-900 sm:col-span-2 sm:mt-0">
                <button
                  onClick={showContrato}
                  className="rounded-md bg-green-600 mt-4 px-4 py-3 font-medium text-white hover:bg-green-700 focus:outline-none"
                >
                  {contrato ? "Cerrar contrato" : "Realizar contrato"}
                </button>
              </dd>
            </div>
          </dl>
          <dl className="divide-y divide-gray-200">
            {
              contrato ? <Contrato/> : ''
            }
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
  // * Comentarios
  const { data: comentarioRecuperado } = await axios.get(
    INITIAL + GETCOMENTARIOS + context.query.id
  );
  return {
    props: { data, infoUser, comentarioRecuperado },
  };
};
export default Id;
