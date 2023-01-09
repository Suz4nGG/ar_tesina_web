import Navigation from "../../components/Global/Navigation";
import { useRouter } from "next/router";
import { actions } from "../data";
import Layout from "../../components/Global/Layout";
import Footer from "../../components/Global/Footer";
import { usePageContext } from "../context/pagesContext";
import ArrowRedirect from "../../components/icons/ArrowRedirect";
import { APISTUDENT } from "../constants";
import axios from "axios";
import { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = ({
  username,
  nombreCompleto,
}) => {
  // const { contextValue, getID } = usePageContext();
  // useEffect(() => {
  //   const idVal = contextValue.find(item => item.id)
  //   !idVal && getID({ username });
  // }, [username]);
  const router = useRouter();
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Bienvenido(a) ${username}` }}>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 my-4">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "rounded-lg inline-flex p-3 ring-4 ring-white"
                  )}
                >
                  {action.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a
                    onClick={() => router.push(action.href)}
                    className="focus:outline-none cursor-pointer"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-400 group-hover:text-green-600"
                aria-hidden="true"
              >
                <ArrowRedirect />
              </span>
            </div>
          ))}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { authTokenUser } = context.req.cookies;
  const { data } = await axios.post(APISTUDENT, {
    authTokenUser,
  });
  const {
    username,
    nombreCompleto,
    nombreResponsable,
    fecNacimiento,
    edad,
    tel,
    ciudad,
    cp,
    municipio,
    tipoDiscapacidad,
    sobreDiscapacidad,
    carrera,
    adaptaciones,
    tiempoDisc,
  } = data[0];
  return {
    props: {
      username,
      nombreCompleto,
      nombreResponsable,
      fecNacimiento,
      edad,
      tel,
      ciudad,
      cp,
      municipio,
      tipoDiscapacidad,
      sobreDiscapacidad,
      carrera,
      adaptaciones,
      tiempoDisc,
    },
  };
}

export default Dashboard;
