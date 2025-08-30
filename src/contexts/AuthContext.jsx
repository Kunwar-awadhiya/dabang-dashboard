import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("dv_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  // fake login - frontend only
  const login = async (email, password) => {
    setLoading(true);
    // simulate small delay
    await new Promise((r) => setTimeout(r, 400));

    if (!email || !password) {
      setLoading(false);
      throw new Error("Please provide email and password");
    }

    // create a simple user object
    const u = { email, name: email.split("@")[0] || "User" };
    localStorage.setItem("dv_user", JSON.stringify(u));
    setUser(u);
    setLoading(false);
    return u;
  };

  const logout = () => {
    localStorage.removeItem("dv_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
