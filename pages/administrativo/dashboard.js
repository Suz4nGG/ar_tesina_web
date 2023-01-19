import React from 'react';
import Navigation from "/components/Global/Navigation";
import Layout from '../../components/Global/Layout';
import ShowAdaptaciones from "./components/ShowAdaptaciones";
import axios from 'axios';
import { GETADAPTACIONES, INITIAL } from '../constants';
import Footer from "/components/Global/Footer.jsx"
const Dashboard = (data) => {
  const dataS = data.data;
  return (
    <>
      <Navigation />
      <Layout data={{ title: `Ajustes curriculares pendientes` }}>
        <div className="mb-20">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="text-sm text-gray-700">
                Aqui se encuentran las adaptaciones pendientes
              </p>
            </div>
          </div>
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
        <Footer/>
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  // * Ver direccionamiento
  const {data} = await axios.get(
    INITIAL+GETADAPTACIONES
  );
  return {
    props: {
      data
    },
  };
}
export default Dashboard;