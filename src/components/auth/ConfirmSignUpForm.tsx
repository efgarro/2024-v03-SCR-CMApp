import * as React from "react";

import { IConfirmSignUpFormInputs } from "../../types/scrTypes";
import { useForm, FormProvider } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { confirmSignUp } from "../../services/authServices";

import InputEmail from "./InputEmail";
import InputConfirmationCode from "./InputConfirmationCode";

import { Typography, Button } from "@mui/material";
import AccountBox from "@mui/icons-material/AccountBox";
import styles from "../../css/auth.module.css";

const ConfirmSignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm<IConfirmSignUpFormInputs>({
    defaultValues: {
      email: "",
      confirmationCode: "",
    },
  });

  const handleConfirmSignUp = async (d: IConfirmSignUpFormInputs) => {
    try {
      await confirmSignUp(d.email, d.confirmationCode);
      alert("Account confirmed successfully!\nSign in on next page.");
      navigate("/auth");
    } catch (error) {
      alert(`Failed to confirm account: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <div className={`layout_flexCol ${styles.authForm_header}`}>
        <AccountBox sx={{ color: "#F000D0" }} />
        {/* <Typography variant="h6" align="center">
          Confirm Sign Up
        </Typography> */}
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleConfirmSignUp)}>
          <div className={`layout_flexCol ${styles.authForm_input}`}>
            <InputEmail />
            <InputConfirmationCode />
            <Button type="submit" variant="contained">
              Confirm Sign Up
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default ConfirmSignUp;
