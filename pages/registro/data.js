export const dateNow = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  month < 10 ? month = `0${month}` : month
  day < 10 ? day = `0${day}` : day
  var today = `${year}-${month}-${day}`;
  return today
};

export const dataForm = [
  {
    colQuery: 3,
    type: "text",
    name: "nombreCompleto",
    text: "Nombre Completo",
    placeholder: "Nombre Completo",
  },
  {
    colQuery: 3,
    type: "text",
    name: "nombreResponsable",
    text: "Nombre del tutor o responsable",
    placeholder: "Nombre del tutor o responsable",
  },
  {
    colQuery: 3,
    colSM: 2,
    type: "date",
    name: "fecNacimiento",
    text: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
  },
  {
    colQuery: 1,
    colSM: 1,
    type: "number",
    name: "edad",
    text: "Edad",
    placeholder: "Edad",
  },
  {
    colQuery: 3,
    type: "tel",
    name: "tel",
    text: "Teléfono",
    placeholder: "Teléfono",
  },
  {
    colQuery: 3,
    type: "text",
    name: "ciudad",
    text: "Ciudad",
    placeholder: "Ciudad",
  },
  {
    colQuery: 1,
    colSM: 1,
    type: "number",
    name: "cp",
    text: "C.P.",
    placeholder: "Código Postal",
  },
  {
    colQuery: 3,
    colSM: 2,
    type: "text",
    name: "municipio",
    text: "Municipio",
    placeholder: "Municipio",
  },
];

export const selectOptionsDis = [
  {
    name: "tipoDiscapacidad",
    value: "Auditiva",
    label: "Auditiva",
  },
  {
    name: "tipoDiscapacidad",
    value: "Baja visión",
    label: "Baja visión",
  },
  {
    name: "tipoDiscapacidad",
    value: "Motora",
    label: "Motora",
  },
  {
    name: "tipoDiscapacidad",
    value: "Psíquica",
    label: "Psíquica",
  },
  {
    name: "tipoDiscapacidad",
    value: "Salud",
    label: "Salud",
  },
];

export const boxOption = [
  {
    text: "Permanente",
    name: "permanente",
    col: 3,
  },
  {
    text: "Temporal",
    name: "temporal",
    col: 3,
    classs: "ml-0 md:ml-4 text-sm sm:text-base font-medium",
  },
];

export const selectOptionsLic = [
  {
    name: "carrera",
    value: "Redes y Servicios de Cómputo",
    label: "Redes y Servicios de Cómputo",
  },
  {
    name: "carrera",
    value: "Cibercrimen",
    label: "Cibercrimen",
  },
];

export const dataAcount = [
  {
    text: "Nombre usuario",
    name: "username",
    placeholder: "Nombre de usuario",
    type: "text",
    colQuery: 3,
    colSM: 1,
  },
  {
    text: "Contraseña",
    name: "password",
    placeholder: "Contraseña",
    type: "password",
    colQuery: 3,
    colSM: 1,
  },
];