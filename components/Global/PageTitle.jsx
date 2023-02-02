import React from "react";
import Head from "next/head";

const PageTitle = ({ title, name, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
        <link rel="icono universidad veracruzana" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageTitle;
