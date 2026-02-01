import { useRef } from "react";

const UserForm = ({ onFormSubmit, firstname, lastname, email }) => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstnameRef.current && lastnameRef.current && emailRef.current) {
      onFormSubmit(
        firstnameRef.current.value,
        lastnameRef.current.value,
        emailRef.current.value,
        Date.now(),
      );
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <>
      <form className="user-form form mt-5" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Firstname"
            ref={firstnameRef}
            defaultValue={firstname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Lastname"
            ref={lastnameRef}
            defaultValue={lastname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            ref={emailRef}
            defaultValue={email}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-75 text-center mx-auto d-block"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
