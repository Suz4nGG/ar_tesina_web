import { jsPDF } from "jspdf";
import { uvLogo } from "./IMAGES/LOGOUV";
import { dateParse } from "/pages/registro/validations";
import "jspdf-autotable";
export const createPDF = async (data, { infoUser }, prev) => {
  const dataSolicitud = Object.values(data);
  const {
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
  const cr = dateParse(createdAt);
  const cr1 = dateParse(fecNacimiento);
  const space = 70;
  const PDF = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });
  const docWidth = PDF.internal.pageSize.getWidth();
  const docHeight = PDF.internal.pageSize.getHeight();
  PDF.setTextColor("#161717");
  PDF.addImage(uvLogo, "PNG", 10, 10, 30, 40);
  PDF.setFontSize(18);
  PDF.setFont("helvetica", "bold");
  PDF.text(`Solicitud de Adaptación de Ajustes razonables`, 50, 25);
  PDF.text(50, 35, `Universidad Veracruzana`);
  PDF.line(0, 55, docWidth, 55);
  PDF.setFontSize(18);
  PDF.text(`Datos del solicitante`, 10, 65);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Nombre estudiante: ${nombreCompleto}`, 10, 74);
  PDF.text(`Nombre responsable: ${nombreResponsable}`, 10, 80);
  PDF.text(`Fecha de nacimiento: ${cr1}`, 10, 86);
  PDF.text(`Edad: ${edad}`, 10, 92);
  PDF.text(`Contacto: ${tel}`, 10, 98);
  PDF.text(`Ciudad: ${ciudad}`, 10, 104);
  PDF.text(`Código postal: ${cp}`, 10, 110);
  PDF.text(`Municipio: ${municipio}`, 10, 116);
  PDF.text(`Tipo de discapacidad: ${tipoDiscapacidad}`, 10, 122);
  PDF.text(`Licenciatura: ${carrera}`, 10, 128);
  PDF.text(`Tiempo discapacidad: ${tiempoDisc}`, 10, 134);
  PDF.text(`Experiencia recepcional: ${experienciaR}`, 10, 140);
  PDF.line(0, 145, docWidth, 145);
  PDF.setFontSize(18);
  PDF.setFont("helvetica", "bold");
  PDF.text(`Datos de la solicitud`, 10, 155);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Número de solicitud: ${idSolicitud}`, 10, 164);
  PDF.text(`Creación de la solicitud: ${cr}`, 10, 169);
  // PDF.text(`: ${cr}`, 10, 169);
  // ! Tabla de opciones
  PDF.autoTable({
    head: [["data"]],
    headStyles: {
      halign: "center",
      valign: "middle",
      fillColor: 157,
    },
    styles: {
      overflow: "lineabreak",
      cellPadding: 1,
      halign: "center",
      valign: "middle",
    },
    theme: "grid",
    startY: 170,
    tableWidth: 108,
    margin: { left: 40 },
  });
  PDF.save("pd.pdf");
  /*
  if (prev) {
    PDF.output("bloburl");
    return;
  } */
};
