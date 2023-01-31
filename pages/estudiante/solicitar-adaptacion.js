import React, { useState } from "react";
import Layout from "../../components/Global/Layout";
import Navigation from "../../components/Global/Navigation";
import FormAC from "./components/FormAC";
import { useRouter } from "next/router";
import { ADAPSTUDENT } from "../constants";
import Link from "next/link";
import Steps from "./components/Steps";

const TEXT = `Una adaptación curricular es el conjunto de precisiones y cambios en los componentes del proyecto curricular de centro o la programación para ajustar la respuesta educativa a las necesidades educativas especiales de un alumno.`;

const dataButtons = [
  {
    text: "Solicitar una adaptación",
    classes: "bg-green-600 hover:bg-green-700",
    href: "",
  },
  {
    text: "Adaptaciones realizadas",
    classes: "bg-blue-600 hover:bg-blue-700 mt-3 sm:mt-0",
    href: ADAPSTUDENT,
  },
];

const Button = ({ text, handleClick, classes, href }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded border border-transparent px-4 py-3 font-medium text-gray-100 focus:outline-none text-sm sm:text-base ${classes}`}
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`inline-flex items-center justify-center rounded border border-transparent px-4 py-3 font-medium text-gray-100 focus:outline-none text-sm sm:text-base ${classes}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

const AlertBox = ({ title, text, Component, downData, handleClick }) => {
  return (
    <div className="bg-white shadow-lg sm:rounded-lg">
      <div className="px-4 py-6 sm:p-6">
        <h3 className="text-lg sm:text-2xl font-medium leading-6 text-gray-900 text-center border-b border-gray-300 pb-2">
          {title}
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-600 text-center">
          <p>{text}</p>
        </div>
        <div className="mt-5 flex justify-evenly flex-col sm:flex-row">
          {downData.map((item) => (
            <Component
              key={item.text}
              classes={item.classes}
              text={item.text}
              handleClick={handleClick}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SolicitarAdaptacion = () => {
  const [show, setShow] = useState(false);
  const [showEjemplo, setShowEjemplo] = useState(false);

  const router = useRouter();
  console.log(router.pathname)
  const handleClick = () => {
    setShow(!show);
  };

  const handleClickEjemplo = () => {
    setShowEjemplo(!showEjemplo);
  };
  return (
    <>
      <Navigation actState="session" />
      <Layout
        data={
          router.query.id
            ? { title: `Editar adaptación curricular` }
            : { title: `Solicitar adaptación curricular` }
        }
      >
        {router.query.id ? (
          <FormAC />
        ) : (
          <>
              <Steps place={show} />
            <div
              className="h-96 grid place-content-center"
              style={{
                display: show ? "none" : "grid",
              }}
            >
              <AlertBox
                title="¿Qué es una adaptación curricular?"
                text={TEXT}
                Component={Button}
                downData={dataButtons}
                handleClick={handleClick}
              />
            </div>
          </>
        )}
        {show ? (
          <>
            <div className="py-4">
              <p>
                El siguiente botón incluye un archivo PDF, el cual contiene los
                diferentes tipos de adaptaciones que puedes solicitar, estas te
                servirán para que puedas determinar cuál es la que necesitas
                para tu adaptación, podrás tomar las pautas proporcionadas y
                escribirlas en las cajas de texto de esta página.
              </p>
              <Link
                className="flex items-center justify-center
                rounded px-4 py-3
                text-base font-medium
                shadow hover:bg-orange-700 sm:px-8 max-w-fit text-gray-100 bg-orange-600 mt-4"
                href="/pdf/tipos_adaptaciones.pdf"
                download="tipos_adaptaciones.pdf"
                target="_blank"
              >
                Descargar ejemplos de tipos de adaptación
              </Link>
            </div>
            <FormAC />
          </>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
};

export default SolicitarAdaptacion;
