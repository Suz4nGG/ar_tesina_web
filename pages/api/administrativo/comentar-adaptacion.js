import { pool } from "/config/db";
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await comentarAdaptacion(req, res);
    case "GET":
      // await getStudent(req, res);
      break;
  }
}

const comentarAdaptacion = async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await pool.query(
      "SELECT * FROM solicitudAdaptacion WHERE idSolicitud = ?",
      [id]
    );
    return res.status(200).json(result[0]);
  } catch (err) {
    return res.status(500).json({ message: "Error del servidor" });
  }
};