import { jsPDF } from "jspdf";
import { uvLogo } from "./IMAGES/LOGOUV";
import { dateParse } from "/pages/registro/validations";
/* import "jspdf-autotable";
 */
export const createPDF = async (data, { infoUser }, prev) => {
  const dataSolicitud = Object.keys(data)
  const PDF = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });
  const docWidth = PDF.internal.pageSize.getWidth();
  const docHeight = PDF.internal.pageSize.getHeight();
  PDF.addImage(uvLogo, "PNG", 10, 10, 30, 30);
  PDF.setFontSize(20);
  PDF.setFont("helvetica", "bold");
  PDF.text(50, docHeight/30, `Universidad Veracruzana`);
  /* PDF.text(`Solicitud de Adaptación de Ajustes razonables`, 50, 25); */
  PDF.line(0, 40, docWidth, 40);
  PDF.save("pd.pdf");
  dataSolicitud.forEach(function (e) {
    console.log(e)
  })
  /* const {
    idSolicitud,
    username,
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
    createdAt,
    estadoSolicitud,
  } = data;
  const {
    nombreCompleto,
    nombreResponsable,
    fecNacimiento,
    edad,
    tel,
    ciudad,
    cp,
    municipio,
    tipoDiscapacidad,
    sobreDiscapacidad,
    carrera,
    adaptaciones,
    tiempoDisc,
    createdAt: creacion,
  } = infoUser[0];
  const cr = dateParse(creacion);
  const cr1 = dateParse(fecNacimiento);
  PDF.setTextColor("#161717");
  // ! TITULO
  PDF.setFontSize(30);
  PDF.setFont("helvetica", "bold");
  PDF.text(`Adaptación curricular`, 10, 25);
  const docWidth = PDF.internal.pageSize.getWidth();
  const docHeight = PDF.internal.pageSize.getHeight();
  PDF.line(0, 40, docWidth, 40);
  // ! SUBTITLE
  PDF.setFontSize(20);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Datos del estudiante`, 10, 50);
  PDF.line(0, 55, docWidth, 55);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "");
  PDF.text(`Nombre estudiante: ${nombreCompleto}`, 10, 63);
  PDF.text(`Nombre responsable: ${nombreResponsable}`, 10, 70);
  PDF.text(`Creación de la solicitud: ${cr}`, 10, 77);
  PDF.text(`Fecha de nacimiento: ${cr1}`, 10, 84);
  PDF.text(`Edad: ${edad}`, 10, 91);
  PDF.text(`Contacto: ${tel}`, 10, 98);
  PDF.text(`Ciudad: ${ciudad}`, 10, 105);
  PDF.text(`Código postal: ${cp}`, 10, 112);
  PDF.text(`Municipio: ${municipio}`, 10, 119);
  PDF.text(`Tipo de discapacidad: ${tipoDiscapacidad}`, 10, 126);
  PDF.text(`Licenciatura: ${carrera}`, 10, 133);
  PDF.text(`Tiempo discapacidad: ${tiempoDisc}`, 10, 140);
  PDF.text(`Experiencia recepcional: ${experienciaR}`, 10, 147);
  // ! SUBTITLE
  PDF.line(0, 155, docWidth, 155);
  PDF.setFontSize(20);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Datos de la solicitud`, 10, 165);
  PDF.line(0, 170, docWidth, 170);
  // PDF.addImage(, 'PNG', 15, 15, 40, 20);

  if (prev) {
    PDF.output("bloburl");
    return;
  } */
};
