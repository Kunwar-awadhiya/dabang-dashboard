import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Logged in state
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("currentUser")) || null
  );

  // Signup function
  const signup = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = {
      id: Date.now(), // simple unique id
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  // Login function
 

  const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) return reject(new Error("Invalid email or password"));

    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
    resolve(true);
  });
};


  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
