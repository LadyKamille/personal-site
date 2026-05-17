import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { resources } from '../../app/siteContent';
import Home from './Home';

describe('Home', () => {
  it('renders the intro content and resource links', () => {
    render(<Home resources={resources} />);

    expect(
      screen.getByRole('img', { name: /kamille norris/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /home/i, level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /hi, i'm kamille norris/i,
        level: 2,
      }),
    ).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(resources.length);
    expect(
      screen.getByRole('link', { name: /foundryvtt \(opens in a new tab\)/i }),
    ).toHaveAttribute('href', 'https://foundry.kamillenorris.com');
  });
});
