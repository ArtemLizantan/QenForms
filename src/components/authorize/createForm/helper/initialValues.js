import * as Yup from "yup";

export const initialValues = {
  newPassword: "",
  confirmPassword: "",
};

export const schemas = {
  custom: Yup.object().shape({
    newPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  }),
};
