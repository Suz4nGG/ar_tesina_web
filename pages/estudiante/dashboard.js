import Navigation from "/components/Global/Navigation";
import { useRouter } from "next/router";
// import { actions } from "/data";
import Layout from "/components/Global/Layout";
import Footer from "/components/Global/Footer";
import ArrowRedirect from "/components/icons/ArrowRedirect";
import { API_ESTUDIANTE } from "/constants";
import axios from "axios";
import { useEffect } from "react";
import PaperClip from "components/icons/PaperClip";
import AcademicCap from "components/icons/AcademicCap";
import Document from "components/icons/Document";
import Settings from "components/icons/Settings";
import {
  SOLICITAR_ADAPTACION,
  ADAPTACIONES_ESTUDIANTE,
  HERRAMIENTAS_ACCESIBLES,
  DOCUMENTOS_REQUERIDOS,
  URL_INICIAL,
} from "/constants";

const actions = [
  {
    title: "Solicitar adaptación curricular",
    description:
      "En este apartado podrás solicitar una adaptación curricular acorde a tus necesidades.",
    href: SOLICITAR_ADAPTACION,
    icon: <AcademicCap />,
    iconText: "text-teal-700",
    iconBack: "bg-teal-50",
  },
  {
    title: "Adaptaciones curriculares ",
    href: ADAPTACIONES_ESTUDIANTE,
    description:
      "En este apartado encontrarás las adaptaciones curriculares que has realizado y el estado en el que se encuentra.",
    icon: <Settings />,
    iconText: "text-purple-700",
    iconBack: "bg-purple-50",
  },
  {
    title: "Herramientas accesibles",
    href: HERRAMIENTAS_ACCESIBLES,
    description:
      "En este apartado encontrarás diferentes tipos de herramientas que te servirán como apoyo para tu adaptación.",
    icon: <Document />,
    iconText: "text-sky-700",
    iconBack: "bg-sky-50",
  },
  {
    title: "Documentación necesaria",
    href: DOCUMENTOS_REQUERIDOS,
    description:
      "En este apartado seleccionarás con qué documentos cuentas para demostrar tu situación de discapacidad.",
    icon: <PaperClip />,
    iconText: "text-yellow-700",
    iconBack: "bg-yellow-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = (
  {
    usernameA,
    nombreCompleto,
    id,
    tel,
    tipoDiscapacidad,
    sobreDiscapacidad,
    carrera,
    correo,
  },
  { errorMesage }
) => {
  // * Guardar usuario localStorage
  useEffect(() => {
    sessionStorage.setItem(
      "idU",
      JSON.stringify({
        usernameA,
        nombreCompleto,
        id,
        tel,
        tipoDiscapacidad,
        sobreDiscapacidad,
        carrera,
        correo,
      })
    );
  }, [
    id,
    carrera,
    correo,
    nombreCompleto,
    sobreDiscapacidad,
    tel,
    tipoDiscapacidad,
    usernameA,
  ]);
  const router = useRouter();
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Portal de Ajustes Curriculares` }}>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 my-4 mb-10">
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
                    action.iconBack,
                    action.iconText,
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
  try {
    const { data } = await axios.post(URL_INICIAL + API_ESTUDIANTE, {
      authTokenUser,
    });
    console.log("DDD", data);
    const {
      id,
      usernameA,
      nombreCompleto,
      tel,
      tipoDiscapacidad,
      sobreDiscapacidad,
      carrera,
      correo,
    } = data;
    return {
      props: {
        id,
        usernameA,
        nombreCompleto,
        tel,
        tipoDiscapacidad,
        sobreDiscapacidad,
        carrera,
        correo,
      },
    };
  } catch (err) {
    // const { message } = data;
    return {
      props: {},
    };
  }
}

export default Dashboard;
