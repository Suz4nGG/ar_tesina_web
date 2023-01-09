import React, { useState, useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Navigation from "../../components/Global/Navigation";
import FormAC from "./components/FormAC";
import { useRouter } from "next/router";
import { ADAPSTUDENT, APISTUDENT } from "../constants";
import Link from "next/link";
import axios from "axios";
import { usePageContext } from "../context/pagesContext";

const TEXT = `loribus dolores nostrum quia qui natus officia quod Doloribus dolores nostrum quia qui natus officia quod Doloribus dolores nostrum quia qui natus officia quod Doloribus dolores nostrum quia qui natus officia quod Doloribus dolores nostrum quia qui natus officia quod.`;

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
  const router = useRouter();

  const handleClick = () => {
    setShow(!show);
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
          <div
            className="h-96 grid place-content-center"
            style={{
              display: show ? "none" : "grid",
            }}
          >
            <AlertBox
              title="¿Cómo puedo solicitar una adaptación curricular?"
              text={TEXT}
              Component={Button}
              downData={dataButtons}
              handleClick={handleClick}
            />
          </div>
        )}
        {show ? <FormAC /> : ""}
      </Layout>
    </>
  );
};

export default SolicitarAdaptacion;