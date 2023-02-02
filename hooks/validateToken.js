import { verify } from "jsonwebtoken";
const SECRET = process.env.SECRET;
export const validateToken = (token) => {
  const { usernameA } = verify(token, SECRET);
  return usernameA;
};
