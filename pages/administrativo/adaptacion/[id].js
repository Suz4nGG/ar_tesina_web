import axios from "axios";
import Navigation from "components/Global/Navigation.jsx";
import Layout from "components/Global/Layout.jsx";
import {
  API_PERSONAL,
  COMENTAR_ADAPTACION,
  URL_INICIAL,
  GET_COMENTARIOS,
  GET_DOCUMENTOS,
  DASHBOARD_PERSONAL,
} from "/constants";
import { dateParse } from "/validations";
import { states } from "/data";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "/components/Global/Footer";
import { useState } from "react";
import TextArea from "components/Estudiante/components/TextArea";
import ErrorMessages from "components/Messages/ErrorMessages";
import ButtonN from "components/Global/ButtonN";
import { timeOut, profesoresInvolucrados } from "/helpers";
import SelectN from "components/Global/Select";
import PDFComponent from "../../../components/PDF/PDFComponent";

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
        setMessage("Debes escribir un comentario");
      } else {
        const enviarCom = await axios.post(
          URL_INICIAL + COMENTAR_ADAPTACION,
          comentarios
        );
        setGetComentarios(enviarCom.data);
        setMessage("Comentario enviado");
      }
    } catch (err) {
      setMessage("Error al enviar tu comentario");
    }
  };
  useEffect(() => {
    timeOut(3000, setMessage(""));
  }, [comentarios]);
  return (
    <>
      <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 break-words">
        <dt className=" font-medium text-gray-600">{title}</dt>
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
              <div className="flex flex-col text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="text-gray-600 overflow-auto">
                  {comentarioRecuperado || (
                    <>
                      Nuevo Comentario <p>{getComentarios}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <TextArea
                label="Comentarios para el estudiante"
                name={nameInput}
                placeholder="Comenta tus observaciones"
                handleChange={handleChange}
              />
              <ButtonN
                styles={"bg-green-600 hover:bg-green-700 text-white"}
                message="Enviar"
              />
              <ErrorMessages
                errors={message}
                show={
                  message.includes("enviado") ||
                  message.includes("Error") ||
                  message.includes("Debes")
                }
                styles={
                  (message.includes("enviado") &&
                    "bg-green-200 text-green-700") ||
                  (message.includes("Error") && "bg-red-200 text-red-700") ||
                  (message.includes("Debes") && "bg-yellow-200 text-yellow-700")
                }
              />
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
      description: profesoresInvolucrados(experienciaR) || "",
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
      title: "Comentarios Previos",
      description: comentarioRecuperado.comentarios,
      btnText: true,
      nameInput: "comentarios",
    },
  ];
  const router = useRouter();

  const handleChangeEstados = async (e) => {
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
    if (estado.e === undefined) {
      setMessage(["Selecciona un estado", "text-yellow-700 bg-yellow-200"]);
    } else {
      if (estado.e.name === "Cancelada") {
        try {
          await axios.delete(
            URL_INICIAL + API_PERSONAL + "/" + router.query.id,
            {
              estado,
            }
          );
        } catch (err) {
          setMessage([
            "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
            "text-red-700 bg-red-200",
          ]);
        }
        router.push(DASHBOARD_PERSONAL);
      } else {
        try {
          const res = await axios.put(
            URL_INICIAL + API_PERSONAL + "/" + router.query.id,
            { estado }
          );
          setNuevoEstado(res.data);
        } catch (err) {
          setMessage([
            "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
            "text-red-700 bg-red-200",
          ]);
        }
      }
    }
  };
  const showContrato = () => {
    setShowContrato(!contrato);
  };
  // ! Pendiente
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
        <SelectN
          handleChangeActualizar={handleChangeActualizar}
          handleChangeEstados={handleChangeEstados}
          message={message}
          showMessage={showMessage}
        />
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
          </dl>
          <dl className="mb-9">
            <PDFComponent dataSolicitud={data} dataEstudiante={infoUser} />
          </dl>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    // * Solicitud
    const { data } = await axios.get(
      URL_INICIAL + API_PERSONAL + "/" + context.query.id
    );
    const usernameEstudiante = data.username;
    // * Información del estudiante
    const { data: infoUser } = await axios.post(
      URL_INICIAL + API_PERSONAL + "/" + context.query.id,
      { usernameEstudiante }
    );
    // * Comentarios
    const { data: comentarioRecuperado } = await axios.get(
      URL_INICIAL + GET_COMENTARIOS + context.query.id
    );
    // * Documentación
    const { data: docs } = await axios.post(URL_INICIAL + GET_DOCUMENTOS, {
      idEstudiante: infoUser.id,
    });
    return {
      props: { data, infoUser, comentarioRecuperado, docs },
    };
  } catch (err) {
    return {
      props: {
        messageError:
          "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
      },
    };
  }
};
export default Id;
