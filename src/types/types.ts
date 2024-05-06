export type FormVariant = "SIGN_UP" | "LOG_IN" | "FORGOT_PASSWORD" | "RESET_PASSWORD";

export type Status = "success" | "error";

export type ApiResponseParams = {
  status: Status;
  message: string;
};
