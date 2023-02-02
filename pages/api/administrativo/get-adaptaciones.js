import { pool } from "/config/db";

export default async function solicitudAdaptaciones(req, res) {
  const [result] = await pool.query("SELECT * FROM solicitudAdaptacion");
  return res.status(200).json(result);
}
