import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { sections } from '../../app/siteContent';
import PrimaryNav from './PrimaryNav';

describe('PrimaryNav', () => {
  it('renders section buttons, marks the active section, and handles navigation', async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();
    const registerButton = vi.fn();

    render(
      <PrimaryNav
        sections={sections}
        activeSection="home"
        indicatorStyle={{ left: 0, width: 100, opacity: 1 }}
        indicatorAnimation={null}
        onNavigate={onNavigate}
        registerButton={registerButton}
      />,
    );

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'home' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('button', { name: 'experience' })).not.toHaveAttribute(
      'aria-current',
    );

    await user.click(screen.getByRole('button', { name: 'toolbox' }));

    expect(onNavigate).toHaveBeenCalledWith('toolbox');
    expect(registerButton).toHaveBeenCalledTimes(sections.length);
  });
});
