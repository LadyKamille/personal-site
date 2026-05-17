import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { sections } from '../../app/siteContent';
import PrimaryNav from './PrimaryNav';

describe('PrimaryNav', () => {
  it('renders section tabs, marks the active section, and handles navigation', async () => {
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
    expect(screen.getByRole('tablist', { name: /primary sections/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'home' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'experience' })).toHaveAttribute(
      'aria-selected',
      'false',
    );

    await user.click(screen.getByRole('tab', { name: 'toolbox' }));

    expect(onNavigate).toHaveBeenCalledWith('toolbox');
    expect(registerButton).toHaveBeenCalledTimes(sections.length);
  });

  it('supports arrow-key navigation between tabs', async () => {
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

    await user.tab();
    await user.keyboard('{ArrowRight}');
    await user.keyboard('{End}');

    expect(onNavigate).toHaveBeenNthCalledWith(1, 'experience');
    expect(onNavigate).toHaveBeenNthCalledWith(2, 'toolbox');
  });
});
