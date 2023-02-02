import { pool } from "/config/db";

export default async function docsSolicitados(req, res) {
  switch (req.method) {
    case "POST":
      return await enviarDocumentacion(req, res)
  }
}

const enviarDocumentacion = async (req, res) => {
  const { docs, idEstudiante } = req.body;
  try {
    // ! Validar que no existe el IDESTUDIANTE
    const [id] = await pool.query(
      "SELECT idEstudiante FROM documentosEntregados WHERE idEstudiante = ?",
      [idEstudiante]
    );
    if (id) {
      const [update] = await pool.query(
        "UPDATE documentosEntregados SET certificadoMedico = ?, comprobanteEstudios = ? WHERE idEstudiante = ?",
        [
          docs[0],
          docs[1],
          idEstudiante,
        ]
      );
      return res.status(200).json(id);
    } else {
      const [result] = await pool.query(
        "INSERT INTO documentosEntregados SET ?",
        {
          idEstudiante,
          certificadoMedico: docs[0],
          comprobanteEstudios: docs[1],
        }
      );
      return res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error del servidor, intente más tarde");
  }
}
