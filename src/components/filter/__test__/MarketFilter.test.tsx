import React from 'react';
import { render, screen } from '@testing-library/react';
import MarketFilter from '../MarketFilter';
import { MARKETS } from '@models/Markets';

describe('MarketFilter', () => {
  it('renders correctly', async () => {
    const selectedMarketValue = MARKETS[0].value;
    render(<MarketFilter selectedMarketValue={selectedMarketValue} />);
    const wrapper = screen.getByTestId('market-filter-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
