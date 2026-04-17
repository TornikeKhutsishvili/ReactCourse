import React from 'react'
import type { IFormField } from '../../../core/interfaces/form-field.interface';

const FormInput:React.FC<IFormField> = ({
    label, name, type, placeholder, handleChange
}) => {
  return (
    <div key={label}>
        <label htmlFor={name}>
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            id={name}
            name={name}
            onChange={handleChange}
        />
    </div>
  )
}

export default FormInput;
