import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from "../App";

jest.mock('../hooks/useGetStockData', () => jest.fn(() => ({
  data: [],
  loading: false,
  error: null,
  previousLink: null,
  nextLink: null,
})));

jest.mock('../hooks/useQueryParam', () => jest.fn(() => ('')));

jest.mock('../models/SortingTypes', () => ({
  DEFAULT_SORTING_OPTIONS: { value: '', label: '' },
  SortingTypes: {},
}));

jest.mock('../components/filter/MarketFilter', () => jest.fn(() => <div />));
jest.mock('../components/filter/SortingFilter', () => jest.fn(() => <div />));
jest.mock('../components/stocks/Stocks', () => jest.fn(() => <div />));
jest.mock('../components/Pagination', () => jest.fn(() => <div />));
jest.mock('../components/Loader', () => jest.fn(() => <div />));

describe('App', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    render(<App />);
    const appWrapper = screen.getByTestId('app-wrapper');
    expect(appWrapper).toBeInTheDocument();
});
});
