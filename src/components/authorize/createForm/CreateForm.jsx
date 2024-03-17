import ButtonForm from "../../../UI/buttonForm/ButtonForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemas, initialValues } from "./helper/initialValues";

const CreateFormComponent = ({ isSubmitting }) => {
  return (
    <Form className="authorize__form">
      <div className="authorize__inputs active">
        <div className="authorize__input-wrapper">
          <div className="authorize__field-wrapper">
            <h3 className="authorize__input-wrapper-title">Password</h3>
            <Field
              className="authorize__input"
              type="newPassword"
              name="newPassword"
              placeholder="Password"
            />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="error-message"
            />
          </div>
        </div>
        <div className="authorize__input-wrapper">
          <div className="authorize__field-wrapper">
            <h3 className="authorize__input-wrapper-title">Password</h3>
            <Field
              className="authorize__input"
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>
        </div>
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
  return (
    <div className="authorize__content">
      <Formik
        validationSchema={schemas.custom}
        initialValues={initialValues}
        onSubmit={() => console.log("Succsess")}
      >
        {({ isSubmitting }) => (
          <CreateFormComponent isSubmitting={isSubmitting} />
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
