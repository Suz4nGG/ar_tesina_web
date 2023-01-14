import React from "react";
import { dataProfesores, states } from "../../data";
import { normalizeText, dateParse } from "../../registro/validations";
import { useRouter } from "next/router";
import { GETADAPT } from "../../constants";
import PanelAdaptaciones from "../../../components/Dashboard/PanelAdaptaciones";

const ShowAdaptaciones = ({
  idSolicitud,
  adapAnteriores,
  estadoSolicitud,
  experienciaR,
  informacion,
  motSolicitud,
  respuesta,
  tiempoHorario,
  username,
  createdAt,
}) => {
  const router = useRouter();
  const date = dateParse(createdAt);
  const EE = normalizeText(experienciaR).toLowerCase();
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const responsables = dataProfesores.find((item) => item.ee === EE);
  const handleClick = () => {
    router.push(`${GETADAPT}${idSolicitud}`);
  };
  return (
    <PanelAdaptaciones
      date={date}
      stateSol={stateSol}
      estadoSolicitud={estadoSolicitud}
      idSolicitud={idSolicitud}
      handleClick={handleClick}
      responsables={responsables}
    />
  );
};

export default ShowAdaptaciones;
