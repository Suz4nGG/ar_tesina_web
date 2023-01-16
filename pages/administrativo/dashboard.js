import React from 'react';
import Navigation from "/components/Global/Navigation";
import Layout from '../../components/Global/Layout';
import ShowAdaptaciones from "/pages/estudiante/components/ShowAdaptaciones";
import axios from 'axios';
import { GETADAPTACIONES, INITIAL } from '../constants';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = (data) => {
  console.log(data.data)
  const dataS = data.data;
  return (
    <>
      <Navigation />
      <Layout data={{ title: `Ajustes curriculares pendientes` }}>
        <div className="mb-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="mt-2 text-sm text-gray-700">
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
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { authTokenUser } = context.req.cookies;
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + authTokenUser,
  };
  const {data} = await axios.get(
    INITIAL+GETADAPTACIONES
  );
  console.log(data)
  return {
    props: {
      data
    },
  };
}
export default Dashboard;
