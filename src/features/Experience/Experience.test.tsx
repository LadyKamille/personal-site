import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './Experience';

describe('Experience', () => {
  it('renders the timeline entries and their details', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /packback/i })).toHaveLength(2);
    expect(screen.getByRole('button', { name: /buoy software/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /interfolio/i })).toBeInTheDocument();
    expect(screen.getByText(/july 2022 - present/i)).toBeInTheDocument();
    expect(screen.getByText(/january 2021 - august 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/architectural direction/i)).toBeInTheDocument();
    expect(screen.getByText(/worked on a small, early stage team/i)).toBeInTheDocument();
  });
});
