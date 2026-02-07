import React, { useState } from "react";

export type IonFormSubmit = (data: {
  firstname: string;
  lastname: string;
  email: string;
}) => void;

interface UserFormProps {
  onFormSubmit: IonFormSubmit;
  firstname?: string;
  lastname?: string;
  email?: string;
}

const UserForm = ({
  onFormSubmit,
  firstname = "",
  lastname = "",
  email = "",
}: UserFormProps) => {
  const [form, setForm] = useState({ firstname, lastname, email });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onFormSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        name="firstname"
        value={form.firstname}
        onChange={handleChange}
        placeholder="First name"
        className="form-control mb-2"
      />
      <input
        name="lastname"
        value={form.lastname}
        onChange={handleChange}
        placeholder="Last name"
        className="form-control mb-2"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-control mb-3"
      />
      <button className="btn btn-primary w-100">Save</button>
    </form>
  );
};

export default UserForm;
