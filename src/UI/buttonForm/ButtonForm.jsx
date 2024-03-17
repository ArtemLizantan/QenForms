import styles from "./buttonForm.module.scss";

const ButtonForm = ({ text, width, onClick, theme }) => {
  return (
    <button
      className={styles.btn + " " + styles[theme]}
      style={{ "--width": `${width}` }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonForm;
