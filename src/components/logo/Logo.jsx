import { Link } from "react-router-dom";
import logo from "../../img/authorize/Logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
