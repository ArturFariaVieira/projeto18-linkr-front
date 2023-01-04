import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function signin(body) {
  const response = axios.post(`${BASE_URL}/sign-in`, body).catch((error) => {
    return error.response;
  });
  return response;
}
