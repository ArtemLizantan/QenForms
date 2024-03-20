import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import union from "../../../img/authorize/union.svg";
import ButtonForm from "../../../UI/buttonForm/ButtonForm";
import { schemas, initialValues } from "./helper/initialValues";

const CreateFormComponent = ({ isSubmitting, errorInput, setErrorInput }) => {
  const formik = useFormikContext();
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const handlePasswordChange = (event, fieldName) => {
    formik.handleChange(event);
    if (errorInput && event.target.name === fieldName) {
      setErrorInput(false);
    }
  };

  const togglePasswordVisibility = (fieldName, event) => {
    event.preventDefault();
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  return (
    <Form className="authorize__form">
      <div className="authorize__inputs active">
        <div className="authorize__input-wrapper">
          <h3 className="authorize__input-wrapper-title">Password</h3>
          <div className="authorize__field-wrapper">
            <Field
              className={`authorize__input ${errorInput && "error"}`}
              type={passwordVisibility.newPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Password"
              onChange={(event) => handlePasswordChange(event, "newPassword")}
            />
            <button
              className="authorize__show-password"
              onClick={() => togglePasswordVisibility("newPassword", event)}
            >
              <img src={union} alt="union" />
            </button>
          </div>
          <ErrorMessage
            name="newPassword"
            component="div"
            className="error-message"
          />
        </div>
        <div className="authorize__input-wrapper">
          <h3 className="authorize__input-wrapper-title">Confirm Password</h3>
          <div className="authorize__field-wrapper">
            <Field
              className={`authorize__input ${errorInput && "error"}`}
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Password"
              onChange={(event) =>
                handlePasswordChange(event, "confirmPassword")
              }
            />
            <button
              className="authorize__show-password"
              onClick={() => togglePasswordVisibility("confirmPassword", event)}
            >
              <img src={union} alt="union" />
            </button>
          </div>
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />
        </div>
        {errorInput && (
          <div className="error-message">
            Request failed with status code 422
          </div>
        )}
      </div>
      <div className="authorize__bottom">
        <div className="authorize__bottom-items">
          <ButtonForm
            text={"Reset Password"}
            width={"100%"}
            theme={"btn_primary"}
            disabled={isSubmitting}
            type={"submit"}
          />
        </div>
      </div>
    </Form>
  );
};

const CreateForm = () => {
  const [error, setError] = useState(false);

  const notifySuccess = () => {
    toast.success("Create new password was success", {
      position: "top-center",
    });
  };

  const notifyError = () => {
    toast.error("Create new password was error!", { position: "top-center" });
  };

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHjklmnopqrstuvwxyz";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  };

  const token = generateRandomString(20);
  const secret = generateRandomString(20);

  return (
    <div className="authorize__content">
      <Formik
        validationSchema={schemas.custom}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            const response = await axios.post(
              "https://auth-qa.qencode.com/v1/auth/password-set",
              {
                token: token,
                secret: secret,
                password: values.newPassword,
                password_confirm: values.confirmPassword,
              },
              { headers: { "Content-Type": "application/json" } }
            );
            console.log("Successful response:", response.data);
            setError(false);
            notifySuccess();
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
          <CreateFormComponent
            setErrorInput={setError}
            errorInput={error}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
