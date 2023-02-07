import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SORTING_OPTIONS } from '@models/SortingTypes';
import SortingFilter from '../SortingFilter';

describe('SortingFilter', () => {
  const selectedSortingValue = SORTING_OPTIONS[0];
  const onChange = jest.fn();

  it('renders correctly with selected sorting value', async () => {
    render(<SortingFilter selectedSortingValue={selectedSortingValue} onChange={onChange} />);
    await waitFor(() => screen.findByTestId('sorting-filter-wrapper'));
    expect(screen.getByTestId('sorting-filter-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('sorting-filter-wrapper').textContent).toBe('Market Cap High to Low');
  });
});
