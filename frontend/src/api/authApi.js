import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true, // cookies ke liye (future use)
});

// REGISTER
export const registerUser = (data) => API.post("/register", data);

// LOGIN
export const loginUser = (data) => API.post("/login", data);

// LOGOUT
export const logoutUser = () => API.post("/logout");