import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { APP_API_URL } = getEnvVariables();

const AppApi = axios.create({
  baseURL: APP_API_URL,
});

AppApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default AppApi;
