import { PDFViewer } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  section: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTable: {
    backgroundColor: "#098137",
    color: "#F5F5F5",
    fontSize: 12,
    padding: 10,
    marginTop: 10,
  },
  headerTable2: {
    backgroundColor: "#1B539E",
    color: "#F5F5F5",
    fontSize: 12,
    padding: 10,
    marginTop: 10,
  },
  columnTable: {
    color: "#333333",
    fontSize: 12,
    padding: 10,
  },
  body: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    padding: 30,
    flexDirection: "column",
  },
  image: {
    width: "30%",
    paddingHorizontal: 20,
  },
  text: {
    width: "100%",
    paddingVertical: 3,
    color: "#333333",
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    paddingTop: 5,
    color: "#333333",
  },
});

// Create Document Component
const PDF = ({
  dataS: {
    carrera,
    correo,
    nombreCompleto,
    sobreDiscapacidad,
    tel,
    tipoDiscapacidad,
  },
  dataSol: {
    idSolicitud,
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
    createdAt,
    estadoSolicitud,
  },
}) => (
  <Document title={`AC_${nombreCompleto}`.toLowerCase().split(" ").join("_")}>
    <Page size="A4" style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          src="/FF.png"
          alt="Logo Universidad Veracruzana"
        />
        <View>
          <Text style={styles.title}>Universidad Veracruzana</Text>
          <Text style={styles.title}>Portal de Ajustes Curriculares</Text>
          <Text style={styles.title}>Solicitud No. {idSolicitud}</Text>
          <Text style={styles.title}>E.E. {experienciaR}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Datos del solicitante</Text>
        <Text style={styles.text}>
          Nombre del solicitante: {nombreCompleto}
        </Text>
        <Text style={styles.text}>Discapacidad: {tipoDiscapacidad}</Text>
        <Text style={styles.text}>Programa educativo: {carrera}</Text>
        <Text style={styles.text}>Correo electrónico: {correo}</Text>
        <Text style={styles.text}>Teléfono: {tel}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Datos de la adaptación curricular</Text>
        <Text style={styles.headerTable}>Presentación de la información</Text>
        <Text style={styles.columnTable}>{informacion}</Text>
        <Text style={styles.headerTable}>Formas de respuesta</Text>
        <Text style={styles.columnTable}>{respuesta}</Text>
        <Text style={styles.headerTable}>Tiempo y horario</Text>
        <Text style={styles.columnTable}>{tiempoHorario}</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.title}>Datos de adaptaciones anteriores</Text>
        <Text style={styles.headerTable2}>
          Adaptaciones recibidas con anterioridad
        </Text>
        <Text style={styles.columnTable}>{adapAnteriores}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Motivo de la solicitud</Text>
        <Text style={styles.headerTable2}>Motivo</Text>
        <Text style={styles.columnTable}>{motSolicitud}</Text>
      </View>
    </Page>
  </Document>
);

export default function Adaptacion (dataS, dataSol) {
  return (
    <>
    <PDFViewer className="w-full h-screen mt-4">
      <PDF {...dataS} {...dataSol} />
    </PDFViewer>
    </>
  );
};
