import axios from "axios";
import React, { useState, useEffect } from "react";
import Layout from "components/Global/Layout";
import Navigation from "components/Global/Navigation";
import ShowAdaptaciones from "components/Estudiante/components/ShowAdaptaciones";
import Footer from "components/Global/Footer";
import { states, dataProfesores } from "/data";
import { dateParse, normalizeText } from "/validations";
import {
  GET_ADAPTACION,
  API_SOLICITAR_ADAPTACION,
  URL_INICIAL,
} from "../../constants";
import Search from "../../components/Search/Search";
import PanelAdaptaciones from "../../components/Dashboard/PanelAdaptaciones";
import { useRouter } from "next/router";
const AdaptacionesCurriculares = (adaptaciones) => {
  const [search, setSearch] = useState(0);
  const [findSolicitud, setFindSolicitud] = useState([]);
  const router = useRouter();
  const data = adaptaciones.adaptaciones;
  let stateSolicitud,
    responsables = "";
  const dataS = data;

  const handleClick = () => router.push(`${GET_ADAPTACION}${search}`);

  useEffect(() => {
    if (search) {
      const searchSolicitud = dataS.filter(
        (itemS) => itemS.idSolicitud === parseInt(search)
      );
      setFindSolicitud(searchSolicitud);
    }
  }, [search, dataS]);
  // ! Revuisar para empezar a quitar la lógica de aquí yu mandarla al helpers
  if (findSolicitud.length != 0) {
    const EE = normalizeText(findSolicitud[0].experienciaR).toLowerCase();
    stateSolicitud = states.find(
      (item) => item[findSolicitud[0].estadoSolicitud]
    );
    responsables = dataProfesores.find((item) => item.ee === EE);
  }
  return (
    <>
      <Navigation actState="session_student" />
      <Layout data={{ title: "Adaptaciones curriculares" }}>
        <div className="mb-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="mt-2 text-sm text-gray-700">
                Aqui se encuentran las adaptaciones que haz solicitado
              </p>
            </div>
          </div>
          <Search
            findSolicitud={findSolicitud}
            setSearch={setSearch}
            search={search}
          />
          {search
            ? findSolicitud[0] && (
                <PanelAdaptaciones
                  date={dateParse(findSolicitud[0].createdAt)}
                  stateSol={stateSolicitud}
                  estadoSolicitud={findSolicitud[0].estadoSolicitud}
                  idSolicitud={findSolicitud[0].idSolicitud}
                  handleClick={handleClick}
                  responsables={responsables}
                />
              )
            : data.map((item) => (
                <ShowAdaptaciones
                  key={item.idSolicitud}
                  adapAnteriores={item.adapAnteriores}
                  estadoSolicitud={item.estadoSolicitud}
                  experienciaR={item.experienciaR}
                  idSolicitud={item.idSolicitud}
                  informacion={item.informacion}
                  motSolicitud={item.motSolicitud}
                  respuesta={item.respuesta}
                  tiempoHorario={item.tiempoHorario}
                  username={item.username}
                  createdAt={item.createdAt}
                />
              ))}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { authTokenUser } = context.req.cookies;
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authTokenUser,
    };
    const { data: adaptaciones } = await axios.get(
      URL_INICIAL + API_SOLICITAR_ADAPTACION,
      {
        headers,
      }
    );
    return {
      props: {
        adaptaciones,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

export default AdaptacionesCurriculares;
