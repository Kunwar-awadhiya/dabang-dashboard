import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    setSubmitting(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (isSignup) {
        // --- SIGNUP LOGIC ---
        const existingUser = users.find((u) => u.email === email.trim());
        if (existingUser) {
          setErr("User with this email already exists");
          setSubmitting(false);
          return;
        }

        const newUser = {
          id: Date.now(),
          name,
          email: email.trim(),
          password,
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! Please login.");

        // reset form & switch to login
        setIsSignup(false);
        setEmail("");
        setPassword("");
        setName("");
        setSubmitting(false);
        return; // important: stop here so login logic doesn't run
      }

      // --- LOGIN LOGIC ---
      const user = users.find(
        (u) => u.email === email.trim() && u.password === password
      );

      if (!user) {
        setErr("Invalid email or password");
        setSubmitting(false);
        return;
      }

      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard", { replace: true }); // always redirect to dashboard
    } catch (error) {
      setErr(error.message || "Action failed");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {err && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {err}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl shadow-lg transition disabled:opacity-60"
          >
            {submitting
              ? isSignup
                ? "Creating..."
                : "Signing in..."
              : isSignup
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setErr("");
            }}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
