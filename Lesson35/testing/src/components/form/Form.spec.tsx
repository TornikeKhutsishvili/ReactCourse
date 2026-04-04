import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Form from './Form';

describe('Form', () => {
  it('renders children correctly', () => {
    const handleSubmit = vi.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });
});
