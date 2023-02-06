import React from 'react';
import {render, screen } from '@testing-library/react';
import {MARKETS} from "../../../models/Markets";
import MarketFilter from "../MarketFilter";

describe('MarketFilter', () => {
    it('renders correctly', async() => {
        const selectedMarketValue = MARKETS[0].value;
        render(<MarketFilter selectedMarketValue={selectedMarketValue} />);
        const wrapper = screen.getByTestId('market-filter-wrapper');
        expect(wrapper).toBeInTheDocument();

    });
});
