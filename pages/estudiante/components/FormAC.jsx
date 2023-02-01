import React, { useEffect, useState } from "react";
import Button from "../../../components/Global/Button";
import TextArea from "./TextArea";
import axios from "axios";
import { SOLADAPT, ADAPSTUDENT, APISTUDENT, GETADAPT } from "../../constants";
import { useRouter } from "next/router";
import { GroupForm } from "../../../components/Forms/GroupForm";
import { dataSolicitudF, dataProfesores } from "../../data";
import { normalizeText } from "../../registro/validations";
import { Link, animateScroll as scroll } from "react-scroll";

const FormAC = ({ endSolicitud, idTopTop }) => {
  const router = useRouter();
  const [dataA, setDataA] = useState({});
  const [dataStorage, setDataStorage] = useState();
  const dataSolicitud = dataSolicitudF(dataA);
  const [messageC, setMessageC] = useState("");
  const [errors, setErrors] = useState({
    message: "",
  });
  // Obtener sessionStorage
  useEffect(() => {
    setDataStorage(JSON.parse(sessionStorage.getItem("idU")));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ee = normalizeText(dataA.experienciaR || "").toLowerCase();
    const responsables = dataProfesores.find((item) => item.ee === ee);
    try {
      if (
        dataA.motSolicitud &&
        dataA.experienciaR &&
        responsables &&
        (dataA.informacion || dataA.respuesta || dataA.tiempoHorario)
      ) {
        if (router.query.id) {
          await axios.put(APISTUDENT + "/adaptacion/" + router.query.id, dataA);
          router.push(GETADAPT + router.query.id);
        } else {
          const res = await axios.post(SOLADAPT, {
            dataSolicitud: dataA,
            username: dataStorage.usernameA || "",
          });
          console.log(res);
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
            router.push(ADAPSTUDENT);
          }, 2000)
          return () => clearTimeout(timer);
        }
      } else {
        setErrors({ message: "* Introduce todos los campos necesarios" });
      }
    } catch (err) {
      console.log(err);
      setErrors({ message: "Error Server" });
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setDataA({ ...dataA, [name]: value });

  useEffect(() => {
    const getDataAdaptacion = async () => {
      const { data } = await axios.get(
        APISTUDENT + "/adaptacion/" + router.query.id
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
      {messageC ? (
        <p className="px-4 py-4 mt-8 bg-yellow-200 rounded text-yellow-800 w-fit">
          {messageC}
        </p>
      ) : (
        ""
      )}
      <form
        className="w-full flex flex-col justify-center pt-2 pb-12 "
        onSubmit={handleSubmit}
      >
        {dataSolicitud.map((item) => (
          <TextArea
            key={item.name}
            label={item.label}
            name={item.name}
            description={item.description}
            required={item.required}
            placeholder={item.placeholder}
            handleChange={handleChange}
            value={item.value}
          />
        ))}
        <div className="mt-4">
          <GroupForm
            name="experienciaR"
            text="Experiencia Educativa"
            handleChange={handleChange}
            placeholder="Experiencia Educativa"
            type="text"
            value={dataA.experienciaR}
          />
        </div>
        <p className="text-red-600 mt-4">{errors.message}</p>
        <div className="block sm:flex justify-between">
          <button
            disabled={!dataA}
            onClick={errors.message ? null : endSolicitud}
            className="
              flex items-center justify-center
              rounded px-4 py-3 mt-4
              text-base font-medium
              shadow hover:bg-green-700 sm:px-8
            text-gray-100 bg-green-600 w-full"
          >
            {/* <Link
            activeClass="active"
            to={idTopTop}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}> */}
            {router.query.id ? "Editar" : "Guardar Solicitud"}
            {/* </Link> */}
          </button>
          {router.query.id ? (
            ""
          ) : (
            <Button
              bg="bg-red-500 w-full ml-0 sm:ml-2"
              textColor="text-gray-100"
              text={"Cancelar Solicitud"}
              hover="bg-red-700 mt-4"
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
