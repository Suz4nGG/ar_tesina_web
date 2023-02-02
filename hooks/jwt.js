import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { TOKENJWT } from "/constants";
const SECRET = process.env.SECRET;

export default function generateToken(data) {
  const { usernameA } = data;
  // ! Establecemos el JWT
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      usernameA,
    },
    SECRET
  );
  // ! Serializar la data para mandarla en la cabecera
  const serialized = serialize(TOKENJWT, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });
  return serialized;
}