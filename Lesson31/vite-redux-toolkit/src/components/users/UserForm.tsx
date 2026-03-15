import React, { useState } from "react";
import type { UserFormSubmit } from "../../interfaces/userForm.type";
import Input from "../Input";
import type { IAddress, ICompany } from "../../interfaces/userList.inteface";

interface UserFormProps {
  onFormSubmit: (data: UserFormSubmit) => void; name?: string;
    username?: string; email?: string; address?: IAddress;
    phone?: string, website?: string; company?: ICompany
}

const UserForm = ({
  onFormSubmit,
  name = "",
  username = "",
  email = "",
  address = { street: "", city: "", zipcode: "" },
  phone = "",
  website = "",
  company = { name: "" }
}: UserFormProps) => {
  const [form, setForm] = useState({ name, username, email, address, phone, website, company });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onFormSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded form-group">
      <Input name="name" value={form.name} onChange={handleChange} placeholder="First name" className="form-control mb-2" />
      <Input name="username" value={form.username} onChange={handleChange} placeholder="Last name" className="form-control mb-2" />
      <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
      <Input name="address" value={form.address.city} onChange={handleChange} placeholder="City" className="form-control mb-2" />
      <Input name="address" value={form.address.street} onChange={handleChange} placeholder="Street" className="form-control mb-2" />
      <Input name="address" value={form.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="form-control mb-2" />
      <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="form-control mb-2" />
      <Input name="website" value={form.website} onChange={handleChange} placeholder="Website" className="form-control mb-2" />
      <Input name="company" value={form.company.name} onChange={handleChange} placeholder="Company name" className="form-control mb-2" />

      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  );
};

export default UserForm;