import React from 'react';
import HeaderForm from '/components/Forms/HeaderForm';
import Pagination from './Pagination';
const ContainerRegister = (props) => {
  return (
    <div className="mx-auto py-12 max-w-7xl flex h-screen flex-col sm:px-6 lg:px-8">
      <div className='h-auto md:h-screen flex flex-col justify-between items-center relative'>
        {/* Pasar por medio del store */}
        <HeaderForm title="DATOS DE IDENTIFICACIÓN DEL ESTUDIANTE"/>
        {props.children}
        <Pagination />
      </div>
    </div>
  )
}

export default ContainerRegister;
