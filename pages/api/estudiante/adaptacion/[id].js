import { pool } from "../../../../config/db";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAdaptacion(req, res);
    case "DELETE":
      // await deleteProduct(req, res);
      break;
    case "PUT":
      return await updateAdaptacion(req, res);
  }
}

const getAdaptacion = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query(
    "SELECT * FROM solicitudAdaptacion WHERE idSolicitud = ?",
    [id]
  );
  return res.status(200).json(result[0]);
};

const updateAdaptacion = async (req, res) => {
  const { id } = req.query;
  const {
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
  } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE solicitudAdaptacion SET informacion = ?, respuesta = ?, tiempoHorario = ?, adapAnteriores = ?, motSolicitud = ?, experienciaR = ? WHERE idSolicitud = ?",
      [
        informacion,
        respuesta,
        tiempoHorario,
        adapAnteriores,
        motSolicitud,
        experienciaR,
        id,
      ]
    );
    return res.status(200).json("update");
  } catch (err) {
    return res.status(200).json("error update");
  }
};
