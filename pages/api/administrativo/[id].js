import { pool } from "/config/db";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAdaptacion(req, res);
    case "POST":
      await getStudent(req, res);
      break;
  }
}

const getAdaptacion = async (req, res) => {
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

const getStudent = async (req, res) => {
  const { usernameEstudiante } = req.body;
  const [result] = await pool.query(
    "SELECT * FROM estudiantes WHERE usernameA = ?",
    [usernameEstudiante]
  );
  return res.status(200).json(result[0]);
};
