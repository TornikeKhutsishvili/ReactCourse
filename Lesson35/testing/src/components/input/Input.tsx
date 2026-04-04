import React from 'react';

interface InputProps {
  id: string;
  type: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ id, type, name, placeholder }) => {
  return (
    <input id={id} type={type} name={name} placeholder={placeholder} />
  );
};

export default Input;