import React, { useState, type ChangeEvent, type ReactNode, type SubmitEvent } from "react";
import type { IFormField } from "../../../core/interfaces/form-field.interface";
import FormInput from "./FormInput";

interface CreateFormProps {
  fields: IFormField[];
  action: (formData: Record<string, string>) => void;
  formBtn: ReactNode;
}

const CreateForm: React.FC<CreateFormProps> = ({ fields, action, formBtn }) => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    action(formData);
    e.currentTarget.reset()
  };

  return (
    <form onSubmit={onSubmit}>
        {fields.map(({type, name, placeholder, label}) => (
          <FormInput
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            label={label}
            handleChange={handleChange}
          />
        ))}
        {formBtn}
    </form>
  )
};

export default CreateForm;
