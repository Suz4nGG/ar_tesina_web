import { pool } from "/config/db";
// comentarioSolicitud
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await obtenerComentarios(req, res);
  }
}

const obtenerComentarios = async (req, res) => {
  try {
    const { id } = req.query
    const [result] = await pool.query("SELECT * FROM comentarioSolicitud WHERE idSolicitud = ?", [id])
    return res.status(200).json(result[0])
  } catch (err) {
    return res.status(200).json({message: "Error del servidor"})
  }
}