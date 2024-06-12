import * as React from "react";

import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/auth.module.css";

const InputConfirmationCode = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: code } = useController({ name: "code" });

  return (
    <React.Fragment>
        <TextField
          {...code}
          error={errors?.code ? true : false}
          label="Confirmation Code"
          variant="outlined"
          margin="normal"
        />
    </React.Fragment>
  );
};

export default InputConfirmationCode;
