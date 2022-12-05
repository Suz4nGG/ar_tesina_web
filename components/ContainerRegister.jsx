import React from 'react';
import HeaderForm from './Forms/HeaderForm';
import Pagination from './Pagination';
const ContainerRegister = (props) => {
  return (
    <div className="mx-auto max-w-9xl flex min-h-full flex-col py-12 sm:px-6 lg:px-8">
      <div>
        <HeaderForm title="DATOS DE IDENTIFICACIÓN DEL ESTUDIANTE"/>
        {props.children}
        <Pagination />
      </div>
    </div>
  )
}

export default ContainerRegister;
