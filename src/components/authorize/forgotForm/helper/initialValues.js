import * as Yup from "yup";

export const initialValues = {
  email: "",
};

const regx = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const schemas = {
  custom: Yup.object().shape({
    email: Yup.string()
      .matches(regx.email, "Invalid email format")
      .required("Email is required"),
  }),
};
