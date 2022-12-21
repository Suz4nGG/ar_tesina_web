import React, { useState } from 'react';
import HeaderForm from '/components/Forms/HeaderForm';
import Pagination from './Pagination';
// import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import { usePageContext } from '../../context/pagesContext';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Global/Button';

const dataForm = [
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "nombreCompleto",
    text: "Nombre Completo",
    placeholder: "Nombre Completo",
    pattern: /^[A-Za-z]+$/i,
    validationMessage: "Unicamente letras",
    value: true
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "nombreResponsable",
    text: "Nombre del tutor o responsable",
    placeholder: "Nombre del tutor o responsable",
    value: true
  },
  {
    col: 3,
    colQuery: 3,
    type: "date",
    name: "fecNacimiento",
    text: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
    value: true
  },
  {
    col: 1,
    colQuery: 2,
    type: "number",
    name: "edad",
    text: "Edad",
    placeholder: "Edad",
    value: 17
  },
  {
    col: 3,
    colQuery: 3,
    type: "tel",
    name: "tel",
    text: "Teléfono",
    placeholder: "Teléfono",
    value: true
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "ciudad",
    text: "Ciudad",
    placeholder: "Ciudad",
    value: true
  },
  {
    col: 3,
    colQuery: 3,
    type: "text",
    name: "municipio",
    text: "Municipio",
    placeholder: "Municipio",
    value: true
  },
  {
    col: 2,
    colQuery: 2,
    type: "number",
    name: "cp",
    text: "Código Postal",
    placeholder: "Código Postal",
    value: true
  }
]



const GroupFormOne = ({ register, name, text, placeholder, type, col, colQuery, required, errors, pattern,
  validationMessage, value }) => {
  console.log("err", errors)
  console.log("mes", validationMessage)
  return <>
    <div className={`col-span-${col} md:col-span-${col}`}>
      <label
        htmlFor={name}
        className="block text-sm md:text-base font-medium text-gray-700"
      >
        {text}
      </label>
      <div className="mt-1">
        <input
          {...register(
              name, {
              required: true,
              pattern: pattern
              }
            )
          }
          placeholder={placeholder}
          type={type}
          id={name}
          className="
            appearance-none
            bg-gray-200text-gray-700 border border-red-500
            rounded py-3 mb-3 leading-tight
            focus:outline-none focus:bg-gray-200 px-2 flex-1 rounded-r-md my-2
            block w-full
          focus:border-green-500 focus:ring-green-500
            text-sm md:text-base"
        />
        {errors[name]?.type === "required" && <p className='text-red-500 text-xs'>Requerido</p>}
        {errors[name]?.type === "maxLength" && (
          <p></p>
        )}
        {errors[name]?.type === "pattern" && (
          <p className='text-red-500 text-xl font-semibold'>Solo caracteres alfabéticos</p>
        )}
      </div>
    </div>
  </>
}



const FormRegister = (props) => {
  const { register, handleSubmit, watch,  formState: { errors } } = useForm()
  const { contextValue, setContextValue } = usePageContext()
  const [step, setStep] = useState("FormOne")
  const onSubmit = data => setContextValue(data)
  // console.log("CTX", contextValue)
  return (
    <>
      <HeaderForm step={step} />
      <form className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-6 lg:grid-cols-6 px-4 sm:p-0">
          {
            dataForm.map((item) => (
              <GroupFormOne
                key={item.name}
                register={register}
                text={item.text}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                col={item.col}
                errors={errors}
                pattern={item.pattern}
                validationMessage={item.validationMessage}
                value={item.value}
              />
            ))
          }
        </div>
        <div className="pt-4 block md:flex justify-center col-span-3 2xl:col-span-2">
          <Button bg="bg-green-600 w-full 2xl:w-1/5" textColor="text-gray-100" text="Envíar" href="#" hover="bg-green-700"/>
        </div>
      </form>
    </>
  )
}

export default FormRegister;
