import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("tt_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
