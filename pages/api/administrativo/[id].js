import { pool } from "/config/db";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await obtenerAdaptacion(req, res);
    case "POST":
      return await getStudent(req, res);
    case "PUT":
      return await cambiarEstado(req, res);
    case "DELETE":
      return await deleteSolicitud(req, res);
  }
}

const obtenerAdaptacion = async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await pool.query(
      "SELECT * FROM solicitudAdaptacion WHERE idSolicitud = ?",
      [id]
    );
    return res.status(200).json(result[0]);
  } catch (err) {
    return res.status(500).json({
      message:
        "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
    });
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

const deleteSolicitud = async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await pool.query(
      "DELETE FROM solicitudAdaptacion WHERE idSolicitud = ?",
      [id]
    );
    return res.status(200).json({
      message: "Solicitud CANCELADA con éxito",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error: La solicitud no existe",
    });
  }
};

const cambiarEstado = async (req, res) => {
  const { id } = req.query;
  const { estado } = req.body;
  const estadoCambio = estado.e.value || estado.value;
  try {
    const [result] = await pool.query(
      "UPDATE solicitudAdaptacion SET estadoSolicitud = ? WHERE idSolicitud = ?",
      [estadoCambio, id]
    );
    return res.status(200).json(estado.e.label);
  } catch (err) {
    return res.status(500).json({ error: "Error de conexión con el servidor" });
  }
};
