import React from "react";
import { dataProfesores, states } from "/data";
import { normalizeText, dateParse } from "/validations";
import { GET_ADAPTACION_PERSONAL } from "/constants";
import PanelAdaptaciones from "components/Dashboard/PanelAdaptaciones";
import { useRoute } from "../../../hooks/useRoute";
const ShowAdaptaciones = ({
  idSolicitud,
  estadoSolicitud,
  experienciaR,
  createdAt,
}) => {
  const date = dateParse(createdAt);
  const EE = normalizeText(experienciaR).toLowerCase();
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const responsables = dataProfesores.find((item) => item.ee === EE);
  return (
    <PanelAdaptaciones
      date={date}
      stateSol={stateSol}
      estadoSolicitud={estadoSolicitud}
      idSolicitud={idSolicitud}
      handleClick={useRoute(`${GET_ADAPTACION_PERSONAL}${idSolicitud}`)}
      responsables={responsables}
    />
  );
};

export default ShowAdaptaciones;
