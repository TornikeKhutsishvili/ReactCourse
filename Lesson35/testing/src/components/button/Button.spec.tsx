import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Button from './Button';

describe('Buttons', () => {
  it('renders button', () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument()
  });
})
