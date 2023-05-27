import { useEffect, useState } from "react";
import Button from "../../../components/Global/Button";
import TextArea from "./TextArea";
import { dataAjustes } from "../../../data";
import axios from "axios";
import {
  API_SOLICITAR_ADAPTACION,
  API_ESTUDIANTE,
  GET_ADAPTACION,
  ADAPTACIONES_ESTUDIANTE,
  API_PERSONAL,
  URL_INICIAL,
} from "constants";
import { useRouter } from "next/router";
import { GroupForm } from "components/Forms/GroupForm";
import { dataSolicitudF } from "data";
import { animateScroll as scroll } from "react-scroll";
import ErrorMessages from "../../Messages/ErrorMessages";
import { profesoresInvolucrados } from "../../../helpers";
import ComboBox from "./ComboBox";
const FormAC = ({ endSolicitud }) => {
  const router = useRouter();
  const [dataA, setDataA] = useState({});
  const [dataStorage, setDataStorage] = useState();
  const dataSolicitud = dataSolicitudF(dataA);
  const [messageC, setMessageC] = useState("");
  const [box, setBox] = useState({});
  const boxList = [];
  const [errors, setErrors] = useState({
    message: "",
  });
  // ^ Obtener sessionStorage
  useEffect(() => {
    setDataStorage(JSON.parse(sessionStorage.getItem("idU")));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responsables = profesoresInvolucrados(dataA.experienciaR);
    try {
      if (
        dataA.motSolicitud &&
        dataA.experienciaR &&
        responsables &&
        (dataA.informacion || dataA.respuesta || dataA.tiempoHorario)
      ) {
        if (router.query.id) {
          await axios.put(
            API_ESTUDIANTE + "/adaptacion/" + router.query.id,
            dataA
          );
          // ! Cambiar ID de la solicitud al editar
          await axios.put(URL_INICIAL + API_PERSONAL + "/" + router.query.id, {
            estado: {
              e: {
                value: "8",
                label: "Actualizada",
              },
            },
          });
          router.push(GET_ADAPTACION + router.query.id);
        } else {
          await axios.post(API_SOLICITAR_ADAPTACION, {
            dataSolicitud: dataA,
            username: dataStorage.usernameA || "",
          });
          // * Volver al inicio despues de que todo vaya bien
          const scrollToTop = () => {
            scroll.scrollToTop();
          };
          scrollToTop();
          setErrors("");
          setMessageC(
            "Seras redirigido a la página 'Adaptaciones Curriculares'"
          );
          // ! Poner un timer para que rediriga
          const timer = setTimeout(() => {
            router.push(ADAPTACIONES_ESTUDIANTE);
          }, 2000);
          return () => clearTimeout(timer);
        }
      } else {
        responsables === undefined
          ? setErrors({
              message:
                "* La Experiencia Educativa que introduciste no es valida",
            })
          : setErrors({ message: "* Introduce todos los campos necesarios" });
      }
    } catch (err) {
      const { message } = err.response.data;
      setErrors({ message });
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setBox({ [name]: value });
    setDataA({ ...dataA, [name]: value });
  };
  boxList.push({ box });
  console.log(boxList);
  useEffect(() => {
    const getDataAdaptacion = async () => {
      const { data } = await axios.get(
        API_ESTUDIANTE + "/adaptacion/" + router.query.id
      );
      setDataA({
        informacion: data.informacion,
        respuesta: data.respuesta,
        tiempoHorario: data.tiempoHorario,
        adapAnteriores: data.adapAnteriores,
        motSolicitud: data.motSolicitud,
        experienciaR: data.experienciaR,
      });
    };
    if (router.query.id) getDataAdaptacion();
  }, [router.query.id]);

  return (
    <div id="upPage">
      <ErrorMessages
        errors={messageC}
        show={messageC}
        styles={"bg-yellow-200 text-yellow-800"}
      />
      <form
        className="w-full flex flex-col justify-center pt-2 pb-12 "
        onSubmit={handleSubmit}
      >
        {dataAjustes.map((item) => (
          <ComboBox
            key={item.name}
            title={item.title}
            name={item.name}
            info={item.info}
            required={item.required}
            adaptaciones={item.adaptaciones}
            placeholder={item.placeholder}
            handleChange={handleChange}
          />
        ))}
        {dataSolicitud.map((item) => (
          <TextArea
            key={item.name}
            label={item.label}
            name={item.name}
            description={item.description}
            required={item.required}
            adaptaciones={item.adaptaciones}
            placeholder={item.placeholder}
            handleChange={handleChange}
          />
        ))}
        <div className="mt-4">
          <GroupForm
            name="experienciaR"
            text="Experiencia Educativa"
            handleChange={handleChange}
            placeholder="Experiencia Educativa"
            type="text"
            value={dataA.experienciaR || ""}
          />
        </div>
        <ErrorMessages
          errors={errors.message}
          show={errors.message ? true : false}
          styles={"bg-red-200 text-red-800"}
        />
        <div className="block sm:flex justify-between">
          <button
            disabled={!dataA}
            onClick={errors.message ? null : endSolicitud}
            className="
              flex items-center justify-center
              rounded px-4 py-3 mt-4
              text-base font-medium
              shadow sm:px-8
              text-white bg-bgBtn_ w-full"
          >
            {router.query.id ? "Editar" : "Enviar Solicitud"}
          </button>
          {router.query.id ? (
            ""
          ) : (
            <Button
              bg="bg-bgError w-full ml-0 sm:ml-2"
              textColor="text-white"
              text={"Cancelar Solicitud"}
              hover="bg-red-800 mt-4"
              disabled={!dataA}
              href="/estudiante/adaptaciones-curriculares"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormAC;
