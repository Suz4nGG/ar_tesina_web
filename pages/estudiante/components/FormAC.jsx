import React, { useEffect, useState } from "react";
import Button from "../../../components/Global/Button";
import TextArea from "./TextArea";
import axios from "axios";
import { SOLADAPT, ADAPSTUDENT, APISTUDENT, GETADAPT } from "../../constants";
import { useRouter } from "next/router";
import { GroupForm } from "../../../components/Forms/GroupForm";
import { dataSolicitudF, dataProfesores } from "../../data";
import { normalizeText } from "../../registro/validations";

const FormAC = () => {
  const router = useRouter();
  const [dataA, setDataA] = useState({});
  const [dataStorage, setDataStorage] = useState();
  const dataSolicitud = dataSolicitudF(dataA);
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
            username: dataStorage.usernameA || '',
          });
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
        <div className="block sm:flex justify-between">
          <Button
            bg="bg-green-600 w-full"
            textColor="text-gray-100"
            text={router.query.id ? "Editar" : "Guardar Solicitud"}
            href="#"
            hover="bg-green-700 mt-4"
            disabled={!dataA}
          />
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
