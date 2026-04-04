import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Register from './Register';
import { MemoryRouter } from 'react-router-dom';

describe('Register Page', () => {
  it('renders form elements', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /registration/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });
});