import axios from "axios";
import React from "react";
import Layout from "components/Global/Layout";
import Navigation from "components/Global/Navigation";
import ShowAdaptaciones from "components/Estudiante/components/ShowAdaptaciones";
import Footer from "components/Global/Footer"

const AdaptacionesCurriculares = (adaptaciones) => {
  const data = adaptaciones.adaptaciones;
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: "Adaptaciones curriculares" }}>
        <div className="mb-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="mt-2 text-sm text-gray-700">
                Aqui se encuentran las adaptaciones que haz solicitado
              </p>
            </div>
          </div>
          {data.map((item) => (
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
};

export async function getServerSideProps(context) {
  const { authTokenUser } = context.req.cookies;
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authTokenUser,
    };
    const { data: adaptaciones } = await axios.get(
      "http://localhost:3000/api/estudiante/solicitar-adaptacion",
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
    console.log(err)
    return {
      props: {},
    };
  }
}

export default AdaptacionesCurriculares;
