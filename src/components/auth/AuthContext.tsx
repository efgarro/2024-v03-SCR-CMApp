import * as React from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../../types/scrTypes";

let AuthContext = React.createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmationCode, setConfirmationCode] = React.useState("");

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    confirmationCode,
    setConfirmationCode,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
