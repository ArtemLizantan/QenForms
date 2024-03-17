import { useState } from "react";

const PasswordField = ({ union, titleInput, title, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordFunc = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="authorize__input-wrapper">
      {titleInput && (
        <h3 className="authorize__input-wrapper-title">{title}</h3>
      )}
      <div className="authorize__field-wrapper">
        <input
          className="authorize__input"
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
        />
        <button
          onClick={(e) => showPasswordFunc(e)}
          className="authorize__show-password"
        >
          <img src={union} alt="union" />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
