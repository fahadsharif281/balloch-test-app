import axios from "axios";
import { HTTP_CLIENT } from "../../utils/config";

export const loginService: any = (email: string, password: string) => {
  return HTTP_CLIENT.post("/api/admin/login", {
    email,
    password,
  });
};

export const forgetPasswordService: any = (email: string) => {
  return HTTP_CLIENT.post("/api/forgetPassword/userForgetPassword", {
    email,
  });
};
