import environments from "../environments";
import { AuthRequestDataI, AuthResponseDataI, LoginRequestDataI, LoginResponseDataI, RegisterRequestDataI, RegisterRequestResponseI } from "../interfaces/Auth";
import { axiosInstance } from '../utils';

export function getAccessToken() {
  return (localStorage.getItem("accessToken") || "");
}

export function authUser(data: AuthRequestDataI) {
  const url = `${environments.API_URL}/auth`;

  return axiosInstance.post<AuthResponseDataI>(url, data)
    .then(response => response.data)
}

export function login(data: LoginRequestDataI) {
  const url = `${environments.API_URL}/auth/login`;

  return axiosInstance.post<LoginResponseDataI>(url, data)
    .then((response) => response.data)
}

export function register(data: RegisterRequestDataI) {
  const url = `${environments.API_URL}/auth/register`;

  return axiosInstance.post<RegisterRequestResponseI>(url, data)
    .then((response) => response.data)
}