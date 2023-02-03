import axios from "axios";
import Navigation from "components/Global/Navigation.jsx";
import Layout from "components/Global/Layout.jsx";
import {
  APIPERSONAL,
  COMENTARADAP,
  INITIAL,
  CHANGESTATE,
  GETCOMENTARIOS,
  GETDOCS,
} from "/constants";
import { dateParse, normalizeText } from "/validations";
import { states } from "/data";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createPDF } from "/hooks/createPDF";
import Footer from "/components/Global/Footer";
import { useState } from "react";
import TextArea from "components/Estudiante/components/TextArea";
import Select from "react-select";
import { statesPersonal, dataProfesores } from "/data";
import { Adaptacion } from "components/pdf/Adaptacion";
import PDFLayout from "../../../components/pdf/PDFLayout";
import componentToPDFBuffer from "../../../lib/PDFHelper";

const Box = ({
  title,
  description,
  btnText,
  nameInput,
  id,
  changeState,
  comentarioRecuperado,
  array,
}) => {
  const [comentarios, setComentarios] = useState({ idSolicitud: id });
  const [message, setMessage] = useState("");
  const [getComentarios, setGetComentarios] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setComentarios({ ...comentarios, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!comentarios.comentarios) {
        setMessage("Debes escribir un mensaje");
      } else {
        const enviarCom = await axios.post(INITIAL + COMENTARADAP, comentarios);
        setGetComentarios(enviarCom.data);
        setMessage("Mensaje enviado");
      }
    } catch (err) {
      setMessage("Error al enviar el mensaje");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [comentarios]);
  return (
    <>
      <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 break-words">
        <dt className="text-sm font-medium text-gray-600">{title}</dt>
        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span className="flex-grow text-ellipsis overflow-auto">
            {array
              ? description.map((item) => (
                  <p key={item.doc}>
                    {item.doc.split(":")[1] === "1"
                      ? item.doc.split(":")[0]
                      : ""}
                  </p>
                ))
              : title === "Estado" && changeState
              ? changeState
              : description}
          </span>
        </dd>
      </div>
      <span className=" mb-4 flex-shrink-0 w-full">
        {btnText ? (
          <div className="">
            <div className="min-w-max min-h-max">
              <div className="flex flex-col text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="text-gray-700 overflow-auto">
                  {comentarioRecuperado || (
                    <>
                      Nuevo Mensaje: <p>{getComentarios}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <TextArea
                label="Comentarios para el estudiante"
                name={nameInput}
                placeholder="Comenta sobre tus observaciones"
                handleChange={handleChange}
              />
              <button className="rounded-md bg-green-600 px-4 py-2 my-2 font-medium text-white hover:bg-green-700 focus:outline-none">
                Enviar
              </button>
              {message.includes("enviado") ? (
                <div className="rounded px-2 py-4 bg-green-200 text-green-700 w-fit mb-4">
                  <p>{message}</p>
                </div>
              ) : message.includes("error") ? (
                <div className="rounded px-2 py-4 bg-red-200 text-red-700 w-fit mb-4">
                  <p>{message}</p>
                </div>
              ) : message.includes("Introduce") ? (
                <div className="rounded px-2 py-4 bg-yellow-200 text-yellow-700 w-fit mb-4">
                  <p>{message}</p>
                </div>
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

const Id = ({ data, infoUser, comentarioRecuperado, docs }) => {
  const { idSolicitud, experienciaR, createdAt, estadoSolicitud } = data;
  // ! Estado de la solicitud
  const stateSol = states.find((item) => item[estadoSolicitud]);
  // ! Responsables
  const experienciaE = normalizeText(experienciaR).toLowerCase();
  const responsablesS = dataProfesores.find(
    (item) => item.ee === experienciaE
  ).profesor;
  const [showMessage, setShowMessage] = useState(false);
  const [estado, setEstado] = useState({});
  const [nuevoEstado, setNuevoEstado] = useState();
  const [contrato, setShowContrato] = useState(false);
  const [message, setMessage] = useState("");

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
      title: "Documentos con los que cuenta",
      description: [
        { doc: `Certificado Médico:${docs.certificadoMedico}` },
        { doc: `Comprobante De Estudios:${docs.comprobanteEstudios}` },
      ],
      array: true,
    },
    {
      title: "Mensajes Previos",
      description: comentarioRecuperado.comentarios,
      btnText: true,
      nameInput: "comentarios",
    },
  ];
  const router = useRouter();
  const downloadPDF = () => {
    const prev = true;
    setShowContrato(!contrato);
    createPDF(data, infoUser, prev);
  };
  const previewPDF = () => {
    const prev = true;
    const pdf = createPDF({ data }, { infoUser }, prev);
  };
  const handleChangeEstados = (e) => {
    try {
      if (e.name === "Terminada" || e.name === "Cancelada") {
        setShowMessage(!showMessage);
        setMessage([
          `¡ADVERTENCIA! El estado de la solicitud cambiará a '${e.name.toUpperCase()}' La solicitud dejará de ser visible`,
          "bg-red-200 text-red-700",
        ]);
      }
      setEstado({ ...estado, e });
    } catch (err) {
      setMessage([
        "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
        "bg-red-200 text-red-700",
      ]);
    }
  };
  const handleChangeActualizar = async () => {
    setShowMessage(!showMessage);
    setMessage([
      "El estado de la solicitud cambio",
      "text-green-700 bg-green-200",
    ]);

    const res = await axios.post(INITIAL + CHANGESTATE, {
      estado,
      idSolicitud: router.query.id,
    });
    setNuevoEstado(res.data);
  };
  const showContrato = () => {
    setShowContrato(!contrato);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showMessage]);

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
            <div>
              {showMessage ? (
                <p
                  className={`mt-4 p-4 rounded ${message[1] ? message[1] : ""}`}
                >
                  {message[0]}
                </p>
              ) : (
                ""
              )}
            </div>
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
                array={item.array}
              />
            ))}
            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
              <dd className="mt-1 mb-2 text-gray-900 sm:col-span-2 sm:mt-0">
                <button
                  onClick={showContrato}
                  className="rounded-md bg-blue-600 mt-4 px-4 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none"
                >
                  {contrato
                    ? "Cerrar contrato"
                    : "Vista previa de la solicitud"}
                </button>
              </dd>
            </div>
          </dl>
          <dl className="divide-y divide-gray-200">
            {contrato ? (
              <div className="w-full h-screen">
                <PDFLayout>
                  <Adaptacion dataS={infoUser} dataSol={data} />
                </PDFLayout>
              </div>
            ) : (
              ""
            )}
          </dl>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

/* export const getInitialProps = async ({ req, res, query }) => {
  const buffer = await componentToPDFBuffer(
    <PDFLayout>
      <Adaptacion />
    </PDFLayout>
  );
  console.log(buffer);
}; */

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
  // * Documentación
  const { data: docs } = await axios.post(INITIAL + GETDOCS, {
    idEstudiante: infoUser.id,
  });
  return {
    props: { data, infoUser, comentarioRecuperado, docs },
  };
};
export default Id;
