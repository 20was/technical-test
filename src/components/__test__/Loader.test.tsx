import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader component', () => {
  it('renders the loader component', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader-component');
    expect(loaderElement).toBeInTheDocument();
  });
});
