import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { resources } from '../../app/siteContent';
import Toolbox from './Toolbox';

describe('Toolbox', () => {
  it('renders capability groups and filters out the Foundry link', () => {
    render(<Toolbox resources={resources} />);

    expect(screen.getByText(/how i build and lead/i)).toBeInTheDocument();
    expect(screen.getByText('Frontend systems')).toBeInTheDocument();
    expect(screen.getByText('Quality & delivery')).toBeInTheDocument();
    expect(screen.getByText('Ways of working')).toBeInTheDocument();

    expect(screen.queryByRole('link', { name: /foundryvtt/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});
