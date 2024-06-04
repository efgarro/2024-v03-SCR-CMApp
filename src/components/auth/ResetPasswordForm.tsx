import * as React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/authServices";

const ResetPasswordForm = () => {
  const { email, setEmail } = useAuth();
  const navigate = useNavigate();

  const handleForgotPassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      navigate("/auth/confirm/reset", { state: { email } });
    } catch (error) {
      alert(`Request failed: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <h4>Reset forgotten password</h4>
      <form onSubmit={handleForgotPassword}>
        <div>
          <input
            className="inputText"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit">Send Code to Email</button>
      </form>
    </React.Fragment>
  );
};

export default ResetPasswordForm;
