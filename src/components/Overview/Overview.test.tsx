import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from './Overview';

describe('Overview Tests', () => {
  it('Overview ===> check the render of the component with the correct info', () => {
    render(<Overview />);
    const title = screen.getByRole('heading', {
      name: /build like the best with github/i,
    });
    const description = screen.getByText(
      /take collaboration to the next level with security and administrative features built for teams\./i
    );
    const image = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image.getAttribute('src')).toContain('/overview.png');
    expect(image).toBeVisible();
  });
});
