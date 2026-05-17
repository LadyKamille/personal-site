import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import ExpandableSection from './ExpandableSection';

describe('ExpandableSection', () => {
  it('starts collapsed and toggles open when clicked', async () => {
    const user = userEvent.setup();

    render(
      <ExpandableSection header={<h2>Section title</h2>}>
        <p>Hidden details</p>
      </ExpandableSection>,
    );

    const toggleButton = screen.getByRole('button', { name: /section title/i });
    const contentRegion = screen.getByRole('region', {
      name: /section title/i,
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute(
      'aria-controls',
      contentRegion?.id ?? '',
    );
    expect(contentRegion).toHaveAttribute('aria-hidden', 'true');

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(contentRegion).toHaveAttribute('aria-hidden', 'false');
  });

  it('auto-expands when configured to expand on view', () => {
    render(
      <ExpandableSection header={<h2>Auto section</h2>} autoExpandOnView={true}>
        <p>Auto details</p>
      </ExpandableSection>,
    );

    const toggleButton = screen.getByRole('button', { name: /auto section/i });
    const contentRegion = screen.getByRole('region', { name: /auto section/i });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(contentRegion).toHaveAttribute('aria-hidden', 'false');
  });
});
