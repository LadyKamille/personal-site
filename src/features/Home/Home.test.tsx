import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { resources } from '../../app/siteContent';
import Home from './Home';

describe('Home', () => {
  it('renders the intro content and resource links', () => {
    render(<Home resources={resources} />);

    expect(screen.getByRole('img', { name: /kamille norris/i })).toBeInTheDocument();
    expect(screen.getByText(/hi, i'm kamille norris/i)).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(resources.length);
    expect(screen.getByRole('link', { name: /foundryvtt/i })).toHaveAttribute(
      'href',
      'https://foundry.kamillenorris.com',
    );
  });
});
