import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
});

export const signup = (data) => API.post("/signup", data);

export const login = (data) => API.post("/login", data);