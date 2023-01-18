import { pool } from "/config/db";

// estadoSolicitud
// solicitudAdaptacion
export default async function cambiarEstado(req, res) {
  const {estado, idSolicitud} = req.body
  const estadoCambio = estado.e.value
  const [result] = await pool.query("UPDATE solicitudAdaptacion SET estadoSolicitud = ? WHERE idSolicitud = ?", [
    estadoCambio, idSolicitud
  ])
  console.log(result)
  return res.status(200).json(estado.e.label)
}
