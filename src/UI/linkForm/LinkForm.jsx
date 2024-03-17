import { Link } from "react-router-dom";
import styles from "./linkForm.module.scss";

const LinkForm = ({ text, width, onClick, theme, path }) => {
  return (
    <Link
      to={path}
      className={styles.btn + " " + styles[theme]}
      style={{ "--width": `${width}` }}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default LinkForm;
