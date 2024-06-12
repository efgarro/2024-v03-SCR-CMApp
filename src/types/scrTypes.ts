import * as z from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  confirmationCode: z.string().optional(),
});

export interface ILoginFormInputs {
  email: string;
  password: string;
}
export interface ISignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IForgotPasswordFormInputs {
  email: string;
}
export interface IConfirmSignUpFormInputs {
  email: string;
  confirmationCode: string;
}
export interface IConfirmResetPasswordFormInputs {
  email: string;
  password: string;
  confirmationCode: string;
}
