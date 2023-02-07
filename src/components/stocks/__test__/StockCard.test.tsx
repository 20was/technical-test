import React from 'react';
import { render, screen } from '@testing-library/react';
import StockCard from '../StockCard';
import { stocksMock } from '../../../mocks/stocks';

describe('StockCard', () => {
  it('renders the stock name and unique symbol', () => {
    render(<StockCard stock={stocksMock[0]} />);
    expect(screen.getByTestId('stock-card-title')).toHaveTextContent(/Apple Inc/);
    expect(screen.getByTestId('stock-card-title')).toHaveTextContent(/NasdaqGS:AAPL/);
  });

  it('renders the stock card and body', () => {
    render(<StockCard stock={stocksMock[0]} />);
    expect(screen.getByTestId('stock-card')).toBeInTheDocument();
    expect(screen.getByTestId('stock-card-body')).toBeInTheDocument();
  });
});
