import React, { useState } from "react";
import type { UserFormSubmit } from "../../interfaces/userForm.interface";
import Input from "../Input";

interface UserFormProps {
  onFormSubmit: (data: UserFormSubmit) => void; firstname?: string; lastname?: string; email?: string
}

const UserForm = ({ onFormSubmit, firstname = "", lastname = "", email = "" }: UserFormProps) => {
  const [form, setForm] = useState({ firstname, lastname, email });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [e.target.name]: e.target.value })};

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onFormSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <Input name="firstname" value={form.firstname} onChange={handleChange} placeholder="First name" className="form-control mb-2" />
      <Input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last name" className="form-control mb-2" />
      <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />

      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  );
};

export default UserForm;