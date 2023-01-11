import axios from "axios";

const BASE_URL = "http://localhost:4000";

export function signin(body) {
  const response = axios.post(`${BASE_URL}/sign-in`, body).catch((error) => {
    return error.response;
  });
  return response;
}

export  function signup(body) {
  const response = axios.post(`${BASE_URL}/sign-up`, body).catch((error) => {
    return error.response;
  });
  return response;
}