import { pool } from "/config/db";

export default async function docsSolicitados(req, res) {
  switch (req.method) {
    case "POST":
      return await obtenerDocumentacion(req, res)
  }
}

const obtenerDocumentacion = async (req, res) => {
  const { idEstudiante } = req.body
  try {
    const [result] = await pool.query("SELECT certificadoMedico, comprobanteEstudios FROM documentosEntregados WHERE idEstudiante = ?", [idEstudiante])
    return res.status(200).json(result[0])
  } catch (err) {
    return res.status(200).json("Error del servidor")
  }
}