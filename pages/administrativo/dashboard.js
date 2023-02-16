import React, { useEffect, useState } from "react";
import Navigation from "components/Global/Navigation";
import Layout from "components/Global/Layout";
import ShowAdaptaciones from "components/Administrativo/components/ShowAdaptaciones";
import axios from "axios";
import { GET_ADAPTACIONACIONES, URL_INICIAL } from "/constants";
import Footer from "components/Global/Footer.jsx";
import { SearchIcon } from "@heroicons/react/outline";
import { states } from "/data";
import { dateParse, normalizeText } from "/validations";
import PanelAdaptaciones from "../../components/Dashboard/PanelAdaptaciones";

const Dashboard = (data) => {
  const [search, setSearch] = useState(0);
  const [findSolicitud, setFindSolicitud] = useState([]);
  const dataS = data.data;
  // const date = dateParse(createdAt);
  // ! Revuisar para empezar a quitar la lógica de aquí yu mandarla al helpers
  const EE = normalizeText(experienciaR).toLowerCase();
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const responsables = dataProfesores.find((item) => item.ee === EE);

  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  useEffect(() => {
    if (search) {
      const searchSolicitud = dataS.filter(
        (itemS) => itemS.idSolicitud === parseInt(search)
      );
      setFindSolicitud(searchSolicitud);
    }
  }, [search, dataS]);
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Ajustes curriculares pendientes` }}>
        <div className="mb-20">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="text-sm text-gray-700">
                Aquí se encuentran las adaptaciones pendientes
              </p>
            </div>
            <div className="flex flex-col sm:items-center mt-4 justify-self-end">
              <label className="text-gray-600 font-bold">
                Buscar solicitud por ID
              </label>
              <div className="flex border border-gray-400 rounded justify-between  px-2">
                <input
                  type="number"
                  onChange={handleSearch}
                  className="outline-none rounded py-2 w-full text-gray-700"
                />
                <SearchIcon className="h-10 text-gray-300" />
              </div>
            </div>
          </div>
          {findSolicitud[0] && (
            <PanelAdaptaciones
              date={findSolicitud[0].createdAt}
              stateSol={stateSol}
              estadoSolicitud={findSolicitud[0].estadoSolicitud}
              idSolicitud={findSolicitud[0].idSolicitud}
              handleClick={findSolicitud[0].handleClick}
              responsables={findSolicitud[0].responsables}
            />
          )}
          {dataS.map((item) => (
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
