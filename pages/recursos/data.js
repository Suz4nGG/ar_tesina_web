import Terminal from "../../components/icons/Terminal";
import Translate from "../../components/icons/Translate";
import Photo from "../../components/icons/Photo";
import Browser from "/components/icons/Browser.jsx"
import Calculator from "../../components/icons/Calculator";

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
