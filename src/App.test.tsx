import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the home section by default and navigates between sections', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByText(/hi, i'm kamille norris/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'home' })).toHaveAttribute(
      'aria-current',
      'page',
    );

    await user.click(screen.getByRole('button', { name: 'toolbox' }));

    expect(screen.getByText(/how i build and lead/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'experience' }));

    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText(/architectural direction/i)).toBeInTheDocument();
  });
});
