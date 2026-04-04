import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('applies correct attributes', () => {
    render(
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
    );

    const input = screen.getByPlaceholderText(/email/i);

    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
  });
});