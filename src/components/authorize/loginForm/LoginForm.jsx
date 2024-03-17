import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { schemas, initialValues } from "./helper/initialValues";
import { Link } from "react-router-dom";
import ButtonForm from "../../../UI/buttonForm/ButtonForm";

import googleIcon from "../../../img/authorize/google.svg";
import githubIcon from "../../../img/authorize/git.svg";

const FormLoginComponent = ({ isSubmitting }) => {
  const formik = useFormikContext();

  const isEmailValid =
    formik.values.email.length > 8 &&
    !formik.errors.email &&
    formik.touched.email;

  return (
    <Form className="authorize__form">
      <div className={`authorize__inputs ${isEmailValid ? "active" : ""}`}>
        <div className="authorize__field-wrapper">
          <Field
            className="authorize__input"
            type="email"
            name="email"
            placeholder="Work email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div className="authorize__field-wrapper">
          <div
            className={`authorize__hide-input ${isEmailValid ? "active" : ""}`}
          >
            <Field
              className="authorize__input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
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
  return (
    <div className="authorize__content">
      <div className="authorize__login-btns">
        <div className="authorize__login-btn">
          <img src={googleIcon} alt="" />
          Google
        </div>
        <div className="authorize__login-btn">
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
        onSubmit={(values, actions) => {
          console.log("Submitted values:", values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormLoginComponent isSubmitting={isSubmitting} />
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
