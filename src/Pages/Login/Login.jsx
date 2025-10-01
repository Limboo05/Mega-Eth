import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("token", res.access_token);
      localStorage.setItem("userId", res.user_id);
      localStorage.setItem("username", res.username);

      alert(`Welcome back, ${res.username}!`);
      navigate("/quiz");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-md text-lg font-medium">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-400 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
