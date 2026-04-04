import React from 'react'
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useSubmit } from '../../hooks/useSubmit/useSubmit';

const Register:React.FC = () => {
  const { onSubmit } = useSubmit(() => {
    console.log('Form is submited');
  });

  return (
    <>
      <h1>Registration</h1>
      <Form onSubmit={onSubmit}>
        <Input id="email" type="email" name="email" placeholder="Email" />
        <Button />
      </Form>
    </>
  )
}

export default Register;