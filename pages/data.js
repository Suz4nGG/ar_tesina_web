import PaperClip from "components/icons/PaperClip";
import AcademicCap from "components/icons/AcademicCap";
import Document from "components/icons/Document";
import Settings from "components/icons/Settings";
import {
  RECURSOS,
  CONTACTO,
  LOGIN,
  SOLSTUDENT,
  ADAPSTUDENT,
  HERRACCESS,
  DOCREQUIRED,
} from "./constants";

export const dateNow = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  month < 10 ? (month = `0${month}`) : month;
  day < 10 ? (day = `0${day}`) : day;
  var today = `${year}-${month}-${day}`;
  return today;
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
    type: "tel",
    name: "tel",
    text: "Teléfono",
    placeholder: "Teléfono",
  },
  {
    colQuery: 3,
    colSM: 1,
    type: "email",
    name: "correo",
    text: "Correo Electrónico",
    placeholder: "Correo Electrónico",
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

export const dataAcount = [
  {
    text: "Nombre usuario",
    name: "usernameA",
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

export const actions = [
  {
    title: "Solicitar adaptación curricular",
    description: "Doloribus dolores nostrum quia qui natus",
    href: SOLSTUDENT,
    icon: <AcademicCap />,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Adaptaciones curriculares ",
    href: ADAPSTUDENT,
    description: "Doloribus dolores nostrum quia qui natus",
    icon: <Settings />,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Herramientas accesibles",
    href: HERRACCESS,
    description: "Doloribus dolores nostrum quia qui natus",
    icon: <Document />,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Documentación Necesarios",
    href: DOCREQUIRED,
    description: "Doloribus dolores nostrum quia qui natus",
    icon: <PaperClip />,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

// !Estado inicial
export const initialState = {
  username: "",
  nombreCompleto: "",
  nombreResponsable: "",
  fecNacimiento: "",
  edad: "",
  tel: "",
  ciudad: "",
  cp: "",
  municipio: "",
  tipoDiscapacidad: "",
  sobreDiscapacidad: "",
  carrera: "",
  tiempoDisc: "",
};

export const dataNavigationSessionStudent = [
  { name: "Solicitar adaptación curricular", href: SOLSTUDENT },
  { name: "Adaptaciones curriculares solicitadas", href: ADAPSTUDENT },
  { name: "Herramientas Accesibles", href: HERRACCESS },
  { name: "Documentación Obligatoria", href: DOCREQUIRED },
];

// ! Items primary menu
export const primaryNavigation = [
  { name: "Inicio", href: "/" },
  { name: "Recursos", href: RECURSOS },
  { name: "Contacto", href: CONTACTO },
];

// ! Items secondary menu
export const secondaryNavigation = [
  {
    name: "Contacto: (555) 412-1234",
    href: "tel:5541251234",
    text: "text-blue-600 text-sm font-medium hover:underline",
  },
  {
    name: "Iniciar Sesión",
    href: LOGIN,
    text: "text-white focus:ring-4 font-medium rounded-lg text-base px-5 mt-5 mob:mt-0 w-full mob:w-auto py-2.5 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800",
  },
];

export const sessionNav = [{ name: "Herramientas Accesibles", href: "/" }];

export const dataSolicitudF = (dataA) => {
  const dataSolicitud = [
    {
      label: "PRESENTACIÓN DE LA INFORMACIÓN",
      name: "informacion",
      description:
        "Para realizar una adecuación de acceso eficaz, es de suma importancia presentar la información de tal manera que los y las estudiantes accedan a ella a través de diversos modos alternativos, los cuales incluyen información táctil, auditiva, visual o la mixtura de estas",
      placeholder: "1. Ampliación de la letra o imagen...",
      value: dataA.informacion || "",
    },
    {
      label: "FORMAS DE RESPUESTA",
      name: "respuesta",
      description:
        "La forma de respuesta debe permitir a los y las estudiantes ejecutar actividades, tareas o evaluaciones a través de diversas formas, utilizando si es necesario dispositivos o ayudas técnicas que disminuyan las barreras que pueden interferir en la participación del o la estudiante en el proceso enseñanza aprendizaje.",
      placeholder: "1. Respuesta a través de computador adaptado...",
      value: dataA.respuesta || "",
    },
    {
      label: "ORGANIZACIÓN DEL TIEMPO Y EL HORARIO",
      name: "tiempoHorario",
      description: "La organización de tiempo y horario debe permitir el acceso autónomo de los y las estudiantes a través de adecuaciones en la forma en que se estructura una clase o desarrollan evaluaciones.",
      placeholder:
        "1. Adecuar el tiempo utilizado en una actividad o evaluación...",
      value: dataA.tiempoHorario || "",
    },
    {
      label: "ADAPTACIONES ANTERIORES",
      name: "adapAnteriores",
      description:
        "Si has contado con adaptaciones en cursos anteriores, por favor escríbelas (Opcional)",
      placeholder: "1. Subtitulos en videos...",
      value: dataA.adapAnteriores || "",
    },
    {
      label: "MOTIVO DE LA SOLUCITUD",
      name: "motSolicitud",
      description: "Argumenta el motivo de la solicitud",
      required: "*",
      placeholder: "El motivo por el cual yo Nombre Completo estudiante de...",
      value: dataA.motSolicitud || "",
    },
  ];
  return dataSolicitud;
};

export const dataProfesores = [
  {
    ee: "sistemas operativos",
    profesor: "MCC Juan Carlos Perez Arriaga",
  },
  {
    ee: "criptografia",
    profesor: "MCC Jovanny Arriaga Martinez",
  },
  {
    ee: "wwww",
    profesor: "MCC Jovanny Ruíz Martinez",
  },
];

export const states = [
  { 1: "Enviada", name: "Enviada", value: "1", label: "Enviada", color: "green" },
  { 2: "Revision", name: "Revision", value: "2", label: "Revisión", color: "orange" },
  { 3: "Aceptada", name: "Aceptada", value: "3", label: "Aceptada", color: "green" },
  { 4: "Pendiente", name: "Pendiente", value: "4", label: "Pendiente", color: "brown" },
  { 5: "Terminada", name: "Terminada", value: "5", label: "Terminada", color: "green" },
  { 6: "Cancelada", name: "Cancelada", value: "6", label: "Cancelada" , color: "red"},
  {
    7: "Suspendida",
    name: "Suspendida",
    value: "7",
    label: "Suspendida",
    color: "orange"
  },
  {
    8: "Actualizada",
    name: "Actualizada",
    value: "8",
    label: "Actualizada",
    color: "green"
  },
];

export const statesPersonal = [
  { 2: "Revision", name: "Revision", value: "2", label: "Revisión", id: '2' },
  { 3: "Aceptada", name: "Aceptada", value: "3", label: "Aceptada", id: '3' },
  { 4: "Pendiente Firma", name: "Pendiente", value: "4", label: "Pendiente Firma", id: '4' },
  { 5: "Terminada", name: "Terminada", value: "5", label: "Terminada", id: '5' },
  { 6: "Cancelada", name: "Cancelada", value: "6", label: "Cancelada", id: '6' },
  {
    7: "Suspendida",
    name: "Suspendida",
    value: "7",
    label: "Suspendida",
    id: '7'
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
