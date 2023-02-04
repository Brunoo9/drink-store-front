import axios from "axios";

const defaultOptions = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
};

//Crea instancia
let clienteAxios = axios.create(defaultOptions);

//Setea el token para todas las request - usando interceptos.
clienteAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default clienteAxios;
