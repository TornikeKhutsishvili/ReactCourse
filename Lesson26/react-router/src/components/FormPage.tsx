/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Form } from "react-router-dom";

export const action = async ({ request }: any) => {
  const data = await request.formData();
  const input = {
    email: data.get("email"),
    message: data.get("password"),
  };

  console.log(input);
};

const FormPage: React.FC = () => {
  return (
    <>
      <Form method="POST" action="/form-page">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  );
};

export default FormPage;
