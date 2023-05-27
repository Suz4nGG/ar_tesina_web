import React from "react";
import { dataProfesores, states } from "/data";
import { normalizeText, dateParse } from "validations";
import { useRouter } from "next/router";
import { GET_ADAPTACION } from "../../../constants";
import PanelAdaptaciones from "../../Dashboard/PanelAdaptaciones";

const ShowAdaptaciones = ({
  idSolicitud,
  estadoSolicitud,
  experienciaR,
  createdAt,
}) => {
  const router = useRouter();
  const date = dateParse(createdAt);
  const EE = normalizeText(experienciaR).toLowerCase();
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const responsables = dataProfesores.find((item) => item.ee === EE);
  console.log("zz", `${GET_ADAPTACION}${idSolicitud}`);
  const handleClick = () => {
    router.push(`${GET_ADAPTACION}${idSolicitud}`);
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
