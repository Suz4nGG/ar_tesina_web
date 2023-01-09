import React, { useEffect, useState } from "react";
import Button from "../../../components/Global/Button";
import TextArea from "./TextArea";
import { usePageContext } from "../../context/pagesContext";
// import { dataSolicitud } from "../../data";
import axios from "axios";
import { SOLADAPT, ADAPSTUDENT, APISTUDENT, GETADAPT } from "../../constants";
import { useRouter } from "next/router";
import { GroupForm } from "../../../components/Forms/GroupForm";
import { dataSolicitudF, dataProfesores } from "../../data";
import { normalizeText } from "../../registro/validations";

const FormAC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    message: "",
  });
  const [dataA, setDataA] = useState({});
  const dataSolicitud = dataSolicitudF(dataA);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ee = normalizeText(dataA.experienciaR).toLowerCase();
    const responsables = dataProfesores.find((item) => item.ee === ee);
    try {
      if (
        dataA.motSolicitud &&
        dataA.experienciaR && responsables &&
        (dataA.informacion || dataA.respuesta || dataA.tiempoHorario)
      ) {
        if (router.query.id) {
          console.log("sss");
          const resA = await axios.put(
            APISTUDENT + "/adaptacion/" + router.query.id,
            dataA
          );
          router.push(GETADAPT+router.query.id)
        } else {
          const res = await axios.post(SOLADAPT, dataA);
          console.log(res);
          router.push(ADAPSTUDENT);
        }
      } else {
        setErrors({ message: "* Introduce todos los campos necesarios" });
      }
    } catch (err) {
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
    <div>
      <form
        className="w-full flex flex-col justify-center pt-2 pb-12 "
        onSubmit={handleSubmit}
      >
        <p className="text-red-600">{errors.message}</p>
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
        <GroupForm
          name="experienciaR"
          text="Experiencia Recepcional"
          handleChange={handleChange}
          placeholder="Experiencia Recepcional"
          type="text"
          value={dataA.experienciaR}
        />
        <Button
          bg="bg-green-600 w-full"
          textColor="text-gray-100"
          text={router.query.id ? "Editar" : "Guardar"}
          href="#"
          hover="bg-green-700 mt-4"
          disabled={!dataA}
        />
      </form>
    </div>
  );
};

export default FormAC;
