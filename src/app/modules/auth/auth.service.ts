import { createToken } from "./auth.utils";
import config from "../../config";
import { validateUser } from "../../utils/validateUser";
import { TAuth } from "./auth.interface";

const loginUser = async (payload: TAuth) => {
  const user = await validateUser(payload?.email);

  const jwtPayload = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    { expiresIn: "1d" }
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  loginUser,
};
