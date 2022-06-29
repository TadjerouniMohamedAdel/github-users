import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Test', () => {
  it('Loader===>check the render of the img', () => {
    render(<Loader />);

    const image = screen.getByRole('img');
    expect(image.getAttribute('src')).toContain('/github-icon.png');
    expect(image).toBeVisible();
  });
});
