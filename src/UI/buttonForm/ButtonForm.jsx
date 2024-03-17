import styles from "./buttonForm.module.scss";

const ButtonForm = ({ text, width, onClick, theme, disabled ,type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={styles.btn + " " + styles[theme]}
      style={{ "--width": `${width}` }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonForm;
