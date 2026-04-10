import React from 'react'
import CreateForm from '../forms/CreateForm';
import type { IFormField } from '../../../core/interfaces/form-field.interface';
import useCreateTodo from '../../../core/hooks/mutations/todo/useCreateTodo';

const CreateTodo:React.FC = () => {
  const { mutate } = useCreateTodo()

  const fields: IFormField[] = [
    {name: "title", label: "Title", placeholder: "Todo title", type: "text"},
    {name: "description", label: "Description", placeholder: "Todo description", type: "text"}
  ]

  const createBtn = () => {
    return <button type='submit'>Create Todo</button>
  }

  const onSubmit = (formData: Record<string, string>) => {
    mutate(formData);
  }

  return (
    <CreateForm fields={fields} action={onSubmit} formBtn={createBtn()} />
  )
}

export default CreateTodo;
