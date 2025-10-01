const API_BASE =
  import.meta.env.VITE_API_URL || "https://mega-eth.onrender.com/api";

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login";
    throw new Error("Unauthorized");
  }

  return res.json();
}
