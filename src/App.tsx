import React, { useState } from 'react';
import useGetStockData from './hooks/useGetStockData';
import MarketFilter from './components/filter/MarketFilter';
import SortingFilter from './components/filter/SortingFilter';
import useQueryParam from './hooks/useQueryParam';
import { useParams } from 'react-router-dom';
import Stocks from './components/stocks/Stocks';
import Pagination from './components/Pagination';
import { SingleValue } from 'react-select';
import Loader from './components/Loader';
import './App.css';
import config from './configs/config.json'
import { DEFAULT_SORTING_OPTIONS, SortingTypes } from './models/SortingTypes';

function App() {
  const { market: selectedMarketValue } = useParams();
  const query = useQueryParam();
  const [sorting, setSorting] = useState<SingleValue<SortingTypes>>(DEFAULT_SORTING_OPTIONS);
  const {
    data = [],
    isLoading,
    hasError,
    previousLink,
    nextLink,
  } = useGetStockData(selectedMarketValue, sorting?.value, query) || {};

  const handleChangeSorting = (value: SingleValue<SortingTypes>) => {
    setSorting(value);
  };

  return (
    <div data-testid="app-wrapper">
      <div className="filter-container">
        <div>
          <MarketFilter selectedMarketValue={selectedMarketValue || ''} />
        </div>
        <div>
          <SortingFilter selectedSortingValue={sorting} onChange={handleChangeSorting} />
        </div>
      </div>
      {isLoading ? <Loader /> : <Stocks stocks={data} />}
      {hasError && <h4 className="error-message">{config.apiErrorMessage}</h4>}
      <Pagination previousLink={previousLink} nextLink={nextLink} />
    </div>
  );
}

export default App;
