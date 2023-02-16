import { pool } from "/config/db";

export default async function solicitudAdaptaciones(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM solicitudAdaptacion");
    console.log(result);
    return res.status(200).json(result.reverse());
  } catch (err) {
    return res.status(500).json({
      message:
        "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
    });
  }
}
