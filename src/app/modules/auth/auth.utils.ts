import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import { TJwtPayload } from "./auth.interface";

// export const createToken = (
//   jwtPayload: TJwtPayload,
//   secret: Secret,
//   expiresIn: string
// ) => {
//   return jwt.sign(jwtPayload, secret, {
//     expiresIn: expiresIn as string | number,
//   });
// };

export const createToken = (
  jwtPayload: TJwtPayload,
  secret: string,
  expiresIn: SignOptions = {}
): string => {
  return jwt.sign(jwtPayload, secret, expiresIn);
};

export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};
