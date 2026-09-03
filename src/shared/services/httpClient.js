import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000", // tu backend NestJS
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request (ej: agregar token JWT)
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de response (manejo de errores globales)
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en API:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default httpClient;