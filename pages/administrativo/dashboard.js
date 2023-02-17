import React, { useEffect, useState } from "react";
import Navigation from "components/Global/Navigation";
import Layout from "components/Global/Layout";
import ShowAdaptaciones from "components/Administrativo/components/ShowAdaptaciones";
import axios from "axios";
import {
  GET_ADAPTACIONACIONES,
  URL_INICIAL,
  GET_ADAPTACION_PERSONAL,
} from "/constants";
import Footer from "components/Global/Footer.jsx";
import { states, dataProfesores } from "/data";
import { dateParse, normalizeText } from "/validations";
import PanelAdaptaciones from "../../components/Dashboard/PanelAdaptaciones";
import { useRouter } from "next/router";
import Search from "../../components/Search/Search";

const Dashboard = (data) => {
  const [search, setSearch] = useState(0);
  const [findSolicitud, setFindSolicitud] = useState([]);
  const router = useRouter();

  let stateSolicitud,
    responsables = "";
  const dataS = data.data;

  const handleClick = () => router.push(`${GET_ADAPTACION_PERSONAL}${search}`);

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
      <Navigation actState="session" />
      <Layout data={{ title: `Ajustes curriculares pendientes` }}>
        <div className="mb-20">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="text-gray-700">
                Aquí se encuentran las adaptaciones pendientes
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
            : dataS.map((item) => (
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
export async function getServerSideProps() {
  // * Ver direccionamiento
  const { data } = await axios.get(URL_INICIAL + GET_ADAPTACIONACIONES);
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default Dashboard;
