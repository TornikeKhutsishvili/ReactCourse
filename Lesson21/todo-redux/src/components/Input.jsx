const Input = ({ value, onChange }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder="Enter Your todo"
        required
      />
    </>
  );
};

export default Input;
