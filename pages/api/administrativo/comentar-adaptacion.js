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
    idSolicitud,
    comentarioInfo,
    comentarioResp,
    comentarioTH,
    comentarioAA,
    comentarioMS,
  } = req.body;
  try {
    const [exist] = await pool.query(
      "SELECT idSolicitud FROM comentarioSolicitud WHERE idSolicitud = ?",
      [idSolicitud]
    );
    if (exist[0]) {
      switch (
        comentarioInfo ||
        comentarioResp ||
        comentarioTH ||
        comentarioAA ||
        comentarioMS
      ) {
        case comentarioInfo:
          const [result1] = await pool.query(
            "UPDATE comentarioSolicitud SET comentarioInfo = ? WHERE idSolicitud = ?",
            [comentarioInfo, idSolicitud]
          );
          return res.status(200).json(comentarioInfo);
        case comentarioResp:
          const [result2] = await pool.query(
            "UPDATE comentarioSolicitud SET comentarioResp = ? WHERE idSolicitud = ?",
            [comentarioResp, idSolicitud]
          );
          return res.status(200).json(comentarioResp);
        case comentarioTH:
          const [result3] = await pool.query(
            "UPDATE comentarioSolicitud SET comentarioTH = ? WHERE idSolicitud = ?",
            [comentarioTH, idSolicitud]
          );
          return res.status(200).json(comentarioTH);
        case comentarioAA:
          const [result4] = await pool.query(
            "UPDATE comentarioSolicitud SET comentarioAA = ? WHERE idSolicitud = ?",
            [comentarioAA, idSolicitud]
          );
          return res.status(200).json(comentarioAA);
        case comentarioMS:
          const [result5] = await pool.query(
            "UPDATE comentarioSolicitud SET comentarioMS = ? WHERE idSolicitud = ?",
            [comentarioMS, idSolicitud]
          );
          return res.status(200).json(comentarioMS);
        default:
          break;
      }
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
