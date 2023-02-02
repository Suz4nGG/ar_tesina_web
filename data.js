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
    description: "En este apartado podrás solicitar una adaptación curricular acorde a tus necesidades.",
    href: SOLSTUDENT,
    icon: <AcademicCap />,
    iconText: "text-teal-700",
    iconBack: "bg-teal-50",
  },
  {
    title: "Adaptaciones curriculares ",
    href: ADAPSTUDENT,
    description: "En este apartado encontrarás las adaptaciones curriculares que has realizado y el estado en el que se encuentra.",
    icon: <Settings />,
    iconText: "text-purple-700",
    iconBack: "bg-purple-50",
  },
  {
    title: "Herramientas accesibles",
    href: HERRACCESS,
    description: "En este apartado encontrarás diferentes tipos de herramientas que te servirán como apoyo para tu adaptación.",
    icon: <Document />,
    iconText: "text-sky-700",
    iconBack: "bg-sky-50",
  },
  {
    title: "Documentación necesaria",
    href: DOCREQUIRED,
    description: "En este apartado seleccionarás con qué documentos cuentas para demostrar tu situación de discapacidad.",
    icon: <PaperClip />,
    iconText: "text-yellow-700",
    iconBack: "bg-yellow-50",
  },
];

// !Estado inicial
export const initialState = {
  username: "",
  nombreCompleto: "",
  fecNacimiento: "",
  edad: "",
  tel: "",
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
const secondaryNavigation = [
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

export default secondaryNavigation

export const sessionNav = [{ name: "Herramientas Accesibles", href: "/" }];

export const dataSolicitudF = (dataA) => {
  const dataSolicitud = [
    {
      label: "PRESENTACIÓN DE LA INFORMACIÓN",
      name: "informacion",
      description:
        "Para realizar una adecuación de acceso eficaz, es de suma importancia presentar la información de tal manera que los y las estudiantes accedan a ella a través de diversos modos alternativos, los cuales incluyen información táctil, auditiva, visual o la combinación de estas",
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

// * herramioentas
import Terminal from "components/icons/Terminal";
import Translate from "components/icons/Translate";
import Photo from "components/icons/Photo";
import Browser from "components/icons/Browser.jsx"
import Calculator from "components/icons/Calculator";

export const herramientasRecursos = [
  {
    titleSection: "Lectores de pantalla",
    description:
      "Los lectores de pantalla son software que permite la utilización del sistema operativo y las distintas aplicaciones mediante el empleo de un sintetizador de voz, el cual “Lee y explica” lo que se visualiza en la pantalla, esta herramienta supone una gran ayuda para las personas con graves problemas de visión o completamente ciegas. La WCAG proporciona una lista con los lectores de pantalla más utilizados:",
    herramientas: [
      {
        nameHerramienta: "BrowseAloud",
        descriptionHerr: "Lector de pantalla destinado específicamente a leer el contenido de las páginas web. Está disponible para Windows y para Mac.",
        href: "https://www.dasolucionesit.com.mx/blog/browsealoud-herramienta-de-accesibilidad/#"
      },
      {
        nameHerramienta: "Click, speak",
        descriptionHerr: "Lector de pantalla para el navegador Mozilla Firefox.",
        href: "https://www.click2speak.net/"
      },
      {
        nameHerramienta: "Dolphin Hal",
        descriptionHerr: "Lector de pantalla con soporte para línea braille.",
        href: "https://www.click2speak.net/"
      },
      {
        nameHerramienta: "JAWS",
        descriptionHerr: "Uno de los mejores lectores de pantalla, incluye el castellano entre sus idiomas.",
        href: "https://www.freedomscientific.com/products/software/jaws/"
      },
      {
        nameHerramienta: "Dolphin SuperNova",
        descriptionHerr: "Lector de pantalla con magnificador de pantalla y soporte para línea braille.",
        href: "https://yourdolphin.com/SuperNova"
      },
      {
        nameHerramienta: "Gw Micro Window-Eyes",
        descriptionHerr: "Lector de pantalla, compatible con los navegadores Microsoft Internet Explorer y Mozilla Firefox.",
        href: "https://www.gwmicro.com/Window-Eyes/"
      },
      {
        nameHerramienta: "MexVox",
        descriptionHerr: "Lector de pantalla para Microsoft Windows gratuito, implementación del sistema DosVox en español.",
        href: "http://intervox.nce.ufrj.br/mexvox/index.htm"
      },
      {
        nameHerramienta: "NVDA",
        descriptionHerr: "Lector de pantalla para Microsoft Windows gratuito.",
        href: "https://nvda.es/"
      },
      {
        nameHerramienta: "Orca",
        descriptionHerr: "Lector de pantalla y magnificador de pantalla para el sistema de escritorio GNOME.",
        href: "https://help.gnome.org/users/orca/stable/introduction.html.es"
      },
      {
        nameHerramienta: "Zoomtext",
        descriptionHerr: "La versión Magnifier/Reader incluye un magnificador de pantalla y un lector de pantalla.",
        href: "https://www.convertic.gov.co/641/w3-propertyvalue-15340.html"
      },
      {
        nameHerramienta: "Sonowebs",
        descriptionHerr: "Explica cómo incorporar el componente en Wordpress, Blogger o cualquier otra página web.",
        href: "https://www.sonowebs.com/"
      },
      {
        nameHerramienta: "vozMe",
        descriptionHerr: "Explica cómo incorporar el componente en Wordpress, Blogger o cualquier otra página web. Permite elegir entre una voz masculina o femenina y también permite descargar un fichero MP3 con el audio.",
        href: "https://vozme.softonic.com/aplicaciones-web"
      }
    ],
    icon: Photo
  },
  {
    titleSection: "Magnificadores de pantalla",
    description:
      "Los magnificadores de pantalla o sistemas de ampliación de pantalla, son un software o dispositivo hardware (por ejemplo, lupas), que permiten visualizar la pantalla con un considerable aumento en su tamaño, lo que supone una ayuda para personas con problemas de visión. Algunos ejemplos de esta herramienta son listados a continuación:",
    herramientas: [
      {
        nameHerramienta: "Ampliador de Windows",
        descriptionHerr: "Disponible en los sistemas operativos Microsoft Windows XP y Microsoft Vista.",
        href: "https://www.microsoft.com/es-es"
      },
      {
        nameHerramienta: "Dolphin Hal",
        descriptionHerr: "Magnificador de pantalla.",
        href: "https://yourdolphin.com/AllProducts"
      },
      {
        nameHerramienta: "Dolphin Lunar Plus",
        descriptionHerr: "Magnificador de pantalla que incluye también lector de pantalla.",
        href: "https://yourdolphin.com/AllProducts"
      },
      {
        nameHerramienta: "iZoom USB Magnifier/Reader",
        descriptionHerr: "Similar a iZoom, pero disponible en una memoria USB para utilizar en cualquier ordenador sin instalación y sin derechos de administrador.",
        href: "http://issist1.com/"
      },
      {
        nameHerramienta: "ZoomText",
        descriptionHerr: "Desde 1 a 36 niveles de aumento, posee la tecnología xFont para aumentar sin pérdida de calidad el texto, incluye controles de color, contraste y brillo.",
        href: "https://www.freedomscientific.com/products/lowvision/"
      },
    ],
    icon: Terminal
  },
  {
    titleSection: "Traductores",
    description:
      "Los traductores de braille traducen documentos a formato braille, los cuales son impresos por una impresora braille, la cual imprime en relieve. A continuación, se muestran herramientas que ayudan a realizar la tarea anterior",
    herramientas: [
      {
        nameHerramienta: "Duxbury",
        descriptionHerr: "Soporta múltiples idiomas. Soporta braille técnico y matemático. Disponible para Windows, Macintosh y DOS.",
        href: "https://www.duxburysystems.com/"
      },
      {
        nameHerramienta: "Megadots",
        descriptionHerr: "Traductor para grandes volúmenes de documentos.",
        href: "https://www.duxburysystems.com/mega_main.asp"
      },
    ],
    icon: Translate
  },
  {
    titleSection: "Navegadores alternos",
    description:
      "",
    herramientas: [
      {
        nameHerramienta: "Amaya",
        descriptionHerr: "Navegador y editor de páginas web del W3C, con soporte para las últimas tecnologías.",
        href: "https://www.w3.org/Amaya/"
      },
      {
        nameHerramienta: "Elinks",
        descriptionHerr: "Navegador en modo texto que incluye soporte para tablas y marcos.",
        href: "http://elinks.or.cz/"
      },
      {
        nameHerramienta: "Lynx",
        descriptionHerr: "Navegador en modo texto.",
        href: "https://lynx-win32-version.softonic.com/"
      },
      {
        nameHerramienta: "MozBraille",
        descriptionHerr: "Basado en el navegador Mozilla, ofrece tres formatos de visualización: en un dispositivo braille, mediante sintetizador de voz y con caracteres grandes.",
        href: "https://www.tecnoaccesible.net/catalogo/mozbraille"
      },
    ],
    icon: Browser
  },
  {
    titleSection: "Teclados virtuales",
    description:
      "",
    herramientas: [
      {
        nameHerramienta: "Click-N-Type",
        descriptionHerr: "Es un teclado virtual diseñado para toda aquella persona con una discapacidad que le impida usar un teclado físico. Mientras que esta persona pueda controlar un ratón, trackball u otro aparato señalador, este programa puede enviar pulsaciones virtualmente a cualquier aplicación basada en el sistema Windows.",
        href: "https://www.tecnoaccesible.net/catalogo/click-n-type"
      },
      {
        nameHerramienta: "Hot Virtual Keybord",
        descriptionHerr: "Teclado virtual en pantalla; posee botones programables, gestos y la opción de autocompletar.",
        href: "https://hotvirtualkeyboard.com/"
      },
      {
        nameHerramienta: "Microsoft On-Screen Keyboard",
        descriptionHerr: "Microsoft Windows XP incluye este teclado virtual. Permite diferentes modos de escritura: pulsar sobre una tecla, permanecer un tiempo sobre una tecla y escaneo.",
        href: "https://www.microsoft.com/windowsxp/using/setup/tips/onscreenkeyboard.mspx"
      },
    ],
    icon: Calculator
  },
];

//  ! documentos necesarios
export const documentosNecesarios = [
  {
    title: "Certificado Médico",
    name: "certificadoMedico",
    value: false,
  },
  {
    title: "Comprobante de Estudios",
    name: "comprobanteEstudios",
    value: false,
  },
];