// src/api.js
import axios from "axios";

// ✅ Backend base URL (no /api prefix anymore)
const API_BASE =
  import.meta.env.VITE_API_URL || "https://mega-eth.onrender.com";

// ✅ Axios instance with token support
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========== AUTH ==========
export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);

// ========== QUIZ ==========
export const submitQuiz = (data) => api.post("/quiz/submit", data);
export const getAttempts = (userId) => api.get(`/quiz/attempts/${userId}`);

// ========== LEADERBOARD ==========
export const fetchLeaderboard = () => api.get("/leaderboard");

export default api;
