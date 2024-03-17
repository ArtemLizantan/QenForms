import Container from "../container/Container";
import Logo from "../logo/Logo";
import "./authorize.scss";
import Title from "../title/Title";
import LoginForm from "./loginForm/LoginForm";
import ForgotForm from "./forgotForm/ForgotForm";
import CreateForm from "./createForm/CreateForm";
const Authorize = ({ title, login, forgot, create }) => {
  return (
    <div className="authorize">
      <Container>
        <div className="authorize__window">
          <div className="authorize__logo">
            <Logo />
          </div>
          <div className="authorize__form-wrapper">
            <Title title={title} />
            {login && <LoginForm />}
            {forgot && <ForgotForm />}
            {create && <CreateForm />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Authorize;
