import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../api";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiFetch("/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          email: userEmail,
          password: userPass,
        }),
      });

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="Your username"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-md text-lg font-medium">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
