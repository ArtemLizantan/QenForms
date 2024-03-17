import Container from "../container/Container";
import Logo from "../logo/Logo";
import "./authorize.scss";
import googleIcon from "../../img/authorize/google.svg";
import githubIcon from "../../img/authorize/git.svg";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import ButtonForm from "../../UI/buttonForm/ButtonForm";

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
            {login && (
              <>
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
                  <form className="authorize__form">
                    <div className="authorize__inputs">
                      <div className="authorize__input-wrapper">
                        <input
                          className="authorize__input"
                          placeholder="Work email"
                          type="text"
                        />
                      </div>
                      <div className="authorize__input-wrapper">
                        <input
                          className="authorize__input"
                          placeholder="Password"
                          type="passowrd"
                        />
                      </div>
                    </div>
                    <div className="authorize__bottom">
                      <Link to={"/forgot-password"} className="authorize__link">
                        Forgot your password?
                      </Link>
                      <div className="authorize__bottom-items">
                        <ButtonForm
                          text={"Log in to Qencode"}
                          width={"100%"}
                          theme={"btn_primary"}
                        />
                        <div className="authorize__bottom-info">
                          Is your company new to Qencode?{" "}
                          <Link to={"/"}>Sign up</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
            {forgot && (
              <div className="authorize__content">
                <form className="authorize__form">
                  <div className="authorize__inputs">
                    <div className="authorize__input-wrapper">
                      <input
                        className="authorize__input"
                        placeholder="Enter your email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="authorize__bottom">
                    <div className="authorize__bottom-items">
                      <ButtonForm
                        text={"Send"}
                        width={"100%"}
                        theme={"btn_primary"}
                      />
                      <ButtonForm
                        text={"Cancel"}
                        width={"100%"}
                        theme={"btn_secondary"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {create && (
              <div className="authorize__content">
                <form className="authorize__form">
                  <div className="authorize__inputs">
                    <div className="authorize__input-wrapper">
                      <h3 className="authorize__input-wrapper-title">
                        Password
                      </h3>
                      <input
                        className="authorize__input"
                        placeholder="Enter your email"
                        type="text"
                      />
                    </div>
                    <div className="authorize__input-wrapper">
                      <h3 className="authorize__input-wrapper-title">
                        Password
                      </h3>
                      <input
                        className="authorize__input"
                        placeholder="Enter your email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="authorize__bottom">
                    <div className="authorize__bottom-items">
                      <ButtonForm
                        text={"Reset Password"}
                        width={"100%"}
                        theme={"btn_primary"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Authorize;
