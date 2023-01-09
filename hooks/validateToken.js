import { verify } from "jsonwebtoken";
const SECRET = process.env.SECRET;
export const validateToken = (token) => {
  const { username } = verify(token, SECRET);
  return username;
};
