import axios from "axios";

export const axiosExternal = axios.create({
  baseURL: process.env.FAKE_STORE_API,
  timeout: 150000,
});

axiosExternal.interceptors.request.use((axiosConfig) => {
  const config = axiosConfig;

  // Espaço reservado para adicionar
  // parâmetros ao header

  return config;
});
