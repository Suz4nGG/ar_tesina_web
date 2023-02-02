import { pool } from "/config/db";

// estadoSolicitud
// solicitudAdaptacion
export default async function cambiarEstado(req, res) {
  const {estado, idSolicitud} = req.body
  const estadoCambio = estado.e.value
  try {
    const [result] = await pool.query("UPDATE solicitudAdaptacion SET estadoSolicitud = ? WHERE idSolicitud = ?", [
      estadoCambio, idSolicitud
    ])
    return res.status(200).json(estado.e.label)
  } catch (err) {
    return res.status(500).json({error: "Error de conexión con el servidor"})
  }
}
