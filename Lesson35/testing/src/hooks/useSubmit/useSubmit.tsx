import React from 'react';

export const useSubmit = (handleSubmit: () => void) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return { onSubmit };
};