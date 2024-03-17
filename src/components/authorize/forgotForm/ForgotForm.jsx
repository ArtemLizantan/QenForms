import ButtonForm from "../../../UI/buttonForm/ButtonForm";
import LinkForm from "../../../UI/linkForm/LinkForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemas, initialValues } from "./helper/initialValues";

const FormForgotComponent = ({ isSubmitting }) => {
  return (
    <Form className="authorize__form">
      <div className="authorize__inputs">
        <div className="authorize__field-wrapper">
          <Field
            className="authorize__input"
            type="oldEmail"
            name="oldEmail"
            placeholder="Work email"
          />
          <ErrorMessage
            name="oldEmail"
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
  return (
    <div className="authorize__content">
      <Formik
        validationSchema={schemas.custom}
        initialValues={initialValues}
        onSubmit={() => console.log("Succsess")}
      >
        {({ isSubmitting }) => (
          <FormForgotComponent isSubmitting={isSubmitting} />
        )}
      </Formik>
    </div>
  );
};

export default ForgotForm;
