import React from 'react'

interface InputProps {
  name: string; value: string; placeholder?: string; className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, value, placeholder, className, onChange }) => {
  return <input name={name} value={value} onChange={onChange} placeholder={placeholder} className={className} />
};

export default Input;
