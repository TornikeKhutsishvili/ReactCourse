import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
  it('renders Register page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });
});