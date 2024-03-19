import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { schemas, initialValues } from "./helper/initialValues";
import { Link } from "react-router-dom";
import ButtonForm from "../../../UI/buttonForm/ButtonForm";
import axios from "axios";
import googleIcon from "../../../img/authorize/google.svg";
import githubIcon from "../../../img/authorize/git.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import union from "../../../img/authorize/union.svg";

const FormLoginComponent = ({ isSubmitting, errorInput, setErrorInput }) => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormikContext();
  const isEmailValid =
    formik.values.email.length > 4 && formik.values.email.includes("@");

  const handleEmailChange = (event) => {
    formik.handleChange(event);
    if (errorInput && event.target.name === "email") {
      setErrorInput(false);
    }
  };

  const handlePasswordChange = (event) => {
    formik.handleChange(event);
    if (errorInput && event.target.name === "password") {
      setErrorInput(false);
    }
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Form className="authorize__form">
      <div className={`authorize__inputs ${isEmailValid ? "active" : ""}`}>
        <div className="authorize__input-wrapper">
          <div className="authorize__field-wrapper">
            <Field
              className={`authorize__input ${errorInput && "error"}`}
              type="email"
              name="email"
              placeholder="Work email"
              onBlur={formik.handleBlur}
              onChange={handleEmailChange}
            />
          </div>
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
        </div>
        <div className="authorize__input-wrapper">
          <div className="authorize__field-wrapper">
            <div
              className={`authorize__hide-input ${
                isEmailValid ? "active" : ""
              } `}
            >
              <Field
                className={`authorize__input ${errorInput && "error"}`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />

              <button
                className="authorize__show-password"
                onClick={handleTogglePassword}
              >
                <img src={union} alt="union" />
              </button>
            </div>
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
      {errorInput && (
        <div className="error-message">Invalid Email or Password</div>
      )}
        </div>
      </div>

      <div className="authorize__bottom authorize__bottom--login">
        {isEmailValid && (
          <Link to={"/forgot-password"} className="authorize__link">
            Forgot your password?
          </Link>
        )}
        <div className="authorize__bottom-items">
          <ButtonForm
            text={"Log in to Qencode"}
            width={"100%"}
            theme={"btn_primary"}
            disabled={isSubmitting}
            type={"submit"}
          />
          <div className="authorize__bottom-info">
            Is your company new to Qencode? <Link to={"/"}>Sign up</Link>
          </div>
        </div>
      </div>
    </Form>
  );
};
const LoginForm = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const csrfToken = searchParams.get("csrf_token");

  console.log(csrfToken);

  const [error, setError] = useState(false);

  const notifySucsess = () => {
    toast.success("Login was successful!", {
      position: "top-center",
    });
  };
  const notifyError = () => {
    toast.error("Login was error!", {
      position: "top-center",
    });
  };

  const notifyErrorGoogle = () => {
    toast.error("Google is not working right now !", {
      position: "top-center",
    });
  };

  const notifyErrorGit = () => {
    toast.error("Github is not working right now !", {
      position: "top-center",
    });
  };

  return (
    <div className="authorize__content">
      <div className="authorize__login-btns">
        <div onClick={notifyErrorGoogle} className="authorize__login-btn">
          <img src={googleIcon} alt="" />
          Google
        </div>
        <div onClick={notifyErrorGit} className="authorize__login-btn">
          <img src={githubIcon} alt="" />
          Github
        </div>
      </div>
      <div className="authorize__delimeter">
        <div className="authorize__delimeter-line"></div>
        <div className="authorize__delimeter-text">or</div>
        <div className="authorize__delimeter-line"></div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.custom}
        onSubmit={async (values, actions) => {
          try {
            const response = await axios.post(
              "https://auth-qa.qencode.com/v1/auth/login",
              values,
              { headers: { "Content-Type": "application/json" } }
            );
            console.log("Успешный ответ:", response.data);
            setError(false);
            notifySucsess();
            actions.setSubmitting(false);
          } catch (error) {
            setError(true);
            console.error("Ошибка входа:", error);
            notifyError();
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormLoginComponent
            setErrorInput={setError}
            errorInput={error}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
