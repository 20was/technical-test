import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination previousLink="" nextLink="" />);
    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toHaveClass('pagination-button disabled-button');
    expect(nextButton).toHaveClass('pagination-button disabled-button');
  });
});
