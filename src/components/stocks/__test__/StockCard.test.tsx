import React from 'react';
import { render, screen } from '@testing-library/react';
import StockCard from '../stocks/StockCard';

const mockStock = {
    id:123,
    name: 'Apple Inc',
    unique_symbol: 'NasdaqGS:AAPL',
    score: {
        data: {
            value: 7,
            income: 8,
            health: 9,
            past: 10,
            future: 11,
            total:157,
        }
    }
};

describe('StockCard', () => {
    it('renders the stock name and unique symbol', () => {
        render(<StockCard stock={mockStock} />);
        expect(screen.getByTestId('stock-card-title')).toHaveTextContent(/Apple Inc/);
        expect(screen.getByTestId('stock-card-title')).toHaveTextContent(/NasdaqGS:AAPL/);
    });

    it('renders the stock card and body', () => {
        render(<StockCard stock={mockStock} />);
        expect(screen.getByTestId('stock-card')).toBeInTheDocument();
        expect(screen.getByTestId('stock-card-body')).toBeInTheDocument();
    });
});
