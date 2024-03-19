import ButtonForm from "../../../UI/buttonForm/ButtonForm";
import LinkForm from "../../../UI/linkForm/LinkForm";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { schemas, initialValues } from "./helper/initialValues";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormForgotComponent = ({ isSubmitting }) => {
  const navigateTo = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const formik = useFormikContext();

  console.log(formik.isValid);

  const handleButtonClick = () => {
    if (formik.isValid) {
      setRedirecting(true);
      setTimeout(() => {
        navigateTo("/create-new-password");
      }, 1500);
    }
  };

  return (
    <Form className="authorize__form">
      <div className="authorize__inputs">
        <div className="authorize__input-wrapper">
          <div className="authorize__field-wrapper">
            <Field
              className="authorize__input"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <div className="authorize__bottom">
        <div className="authorize__bottom-items">
          <ButtonForm
            text={"Send"}
            disabled={isSubmitting}
            type={"submit"}
            width={"100%"}
            theme={"btn_primary"}
            onClick={handleButtonClick}
          />
          <LinkForm
            path={"/"}
            text={"Cancel"}
            width={"100%"}
            theme={"btn_secondary"}
          />
        </div>
      </div>
    </Form>
  );
};

const ForgotForm = () => {
  const [error, setError] = useState(false);
  const notifySucsess = () => {
    toast.success("Please check your email to complete the password reset.", {
      position: "top-center",
    });
  };
  const notifyError = () => {
    toast.error(
      "Password reset failed. Please contact support for assistance.",
      {
        position: "top-center",
      }
    );
  };

  return (
    <div className="authorize__content">
      <Formik
        validationSchema={schemas.custom}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            const response = await axios.post(
              "https://auth-qa.qencode.com/v1/auth/password-reset",
              {
                email: values.email,
              },
              { headers: { "Content-Type": "application/json" } }
            );
            console.log("Successful response:", response.data);
            setError(false);
            notifySucsess();
            actions.setSubmitting(false);
          } catch (error) {
            setError(true);
            console.error("Login error:", error);
            notifyError();
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormForgotComponent isSubmitting={isSubmitting} />
        )}
      </Formik>
    </div>
  );
};

export default ForgotForm;
