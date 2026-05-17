import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { resources } from '../../app/siteContent';
import Toolbox from './Toolbox';

describe('Toolbox', () => {
  it('renders capability groups and filters out the Foundry link', () => {
    render(<Toolbox resources={resources} />);

    expect(
      screen.getByRole('heading', { name: /toolbox/i, level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /how i build and lead/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText('Frontend systems')).toBeInTheDocument();
    expect(screen.getByText('Quality & delivery')).toBeInTheDocument();
    expect(screen.getByText('Ways of working')).toBeInTheDocument();

    expect(
      screen.queryByRole('link', { name: /foundryvtt/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /linkedin \(opens in a new tab\)/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /github \(opens in a new tab\)/i }),
    ).toBeInTheDocument();
  });
});
