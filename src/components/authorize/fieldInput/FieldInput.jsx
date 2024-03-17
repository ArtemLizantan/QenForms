const FieldInput = ({ placeholder }) => {
  return (
    <div className="authorize__input-wrapper">
      <div className="authorize__field-wrapper">
        <input
          className="authorize__input"
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FieldInput;
