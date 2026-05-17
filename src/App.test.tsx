import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders a skip link that targets the main content region', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.tab();

    const skipLink = screen.getByRole('link', {
      name: /skip to main content/i,
    });

    expect(skipLink).toHaveFocus();
    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(screen.getByRole('main')).toHaveAttribute('tabindex', '-1');
  });

  it('renders the home section by default and navigates between sections', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByText(/hi, i'm kamille norris/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'home' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel')).toHaveAttribute(
      'aria-labelledby',
      'section-tab-home',
    );

    await user.click(screen.getByRole('tab', { name: 'toolbox' }));

    expect(screen.getByText(/how i build and lead/i)).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toHaveAttribute(
      'aria-labelledby',
      'section-tab-toolbox',
    );

    await user.click(screen.getByRole('tab', { name: 'experience' }));

    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/architectural direction/i)).toBeInTheDocument();
  });
});
