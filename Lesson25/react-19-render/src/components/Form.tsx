import React, { useId } from "react";

const Form: React.FC = () => {
  const id = useId();

  return (
    <div style={{ padding: "20px" }}>
      <form action="#">
        <div className="form-group">
          <label htmlFor={id}>Email:</label>
          <input type="text" placeholder="Enter Your Email" id={id} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
