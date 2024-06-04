import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp, forgotPassword } from "../../services/authServices";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";

const AuthChoices = () => {
  const [activeChoice, setActiveChoice] = useState(1);

  const authChoices = {
    1: <LoginForm />,
    2: <SignUpForm />,
    3: <ResetPasswordForm />,
  };

  return (
    <React.Fragment>
      <p>{authChoices[activeChoice as keyof typeof authChoices]}</p>

      {activeChoice !== 1 && (
        <button
          onClick={() => {
            setActiveChoice(1);
          }}
        >
          Login
        </button>
      )}

      {activeChoice === 1 && (
        <button
          onClick={() => {
            setActiveChoice(2);
          }}
        >
          Sign Up
        </button>
      )}
      {activeChoice === 1 && (
        <button
          onClick={() => {
            setActiveChoice(3);
          }}
        >
          Forgot Password
        </button>
      )}
    </React.Fragment>
  );
};

export default AuthChoices;
