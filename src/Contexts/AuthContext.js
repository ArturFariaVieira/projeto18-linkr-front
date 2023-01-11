import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [picture, setPicture] = useState("")

  return (
    <AuthContext.Provider value={{ jwt, setJwt, picture, setPicture }}>
      {children}
    </AuthContext.Provider>
  );
}
