import React from 'react';
import { render, screen } from '@testing-library/react';
import Stocks from '../stocks/Stocks';

describe('Stocks', () => {
    const stocksMock = [
        {
            id: 1,
            name: 'Apple',
            unique_symbol: 'AAPL',
            score: {
                data: {
                    value: 7,
                    income: 8,
                    health: 9,
                    past: 10,
                    future: 11,
                    total: 157,
                }
            }
        },
        {
            id: 2,
            name: 'Google',
            unique_symbol: 'GOOG',
            score: {
                data: {
                    value: 8,
                    income: 0,
                    health: 5,
                    past: 12,
                    future: 11,
                    total: 12,
                }
            }
        }
    ];
    it('renders the wrapper', () => {
        render(<Stocks stocks={stocksMock}/>);
        expect(screen.getByTestId('stocks-wrapper')).toBeTruthy();
    });
});
