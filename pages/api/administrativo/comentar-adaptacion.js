import { pool } from "/config/db";
// comentarioSolicitud
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await comentarAdaptacion(req, res);
  }
}

const comentarAdaptacion = async (req, res) => {
  const {
    comentarios,
    idSolicitud
  } = req.body;
  console.log(req.body)
  try {
    const [exist] = await pool.query(
      "SELECT idSolicitud FROM comentarioSolicitud WHERE idSolicitud = ?",
      [idSolicitud]
    );
    if (exist[0]) {
      const [result1] = await pool.query(
        "UPDATE comentarioSolicitud SET comentarios = ? WHERE idSolicitud = ?",
        [comentarios, idSolicitud]
      );
      return res.status(200).json(comentarios);
    } else {
      const [result] = await pool.query(
        "INSERT INTO comentarioSolicitud SET ?",
        { ...req.body }
      );
      return res.status(200).json(result[0]);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error del servidor" });
  }
};
