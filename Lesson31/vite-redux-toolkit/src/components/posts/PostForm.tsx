import React, { useState } from "react";
import type { PostFormSubmit } from "../../interfaces/postForm.type";
import Input from "../Input";

interface PostFormProps {
  onFormSubmit: (data: PostFormSubmit) => void; title?: string; body?: string;
}

const PostForm = ({ onFormSubmit, title = "", body = "" }: PostFormProps) => {
  const [form, setForm] = useState({ title, body });

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
      <Input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="form-control mb-2" />
      <Input name="body" value={form.body} onChange={handleChange} placeholder="Description" className="form-control mb-2" />

      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  )
}

export default PostForm;