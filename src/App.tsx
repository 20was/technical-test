import React, {useState} from 'react';
import useGetStockData from "./hooks/useGetStockData";
import MarketFilter from "./components/filter/MarketFilter";
import SortingFilter from "./components/filter/SortingFilter";
import {DEFAULT_SORTING_OPTIONS, SortingTypes} from "./models/SortingTypes";
import useQueryParam from "./hooks/useQueryParam";
import {useParams} from "react-router-dom";
import Stocks from "./components/stocks/Stocks";
import Pagination from "./components/Pagination";
import {SingleValue} from "react-select";
import Loader from "./components/Loader";
import './App.css'

function App() {
    const { market: selectedMarketValue } = useParams();
    const query = useQueryParam();
    const [sorting, setSorting] = useState<SingleValue<SortingTypes>>(
        DEFAULT_SORTING_OPTIONS
    );
    const {data=[], loading, error, previousLink, nextLink} = useGetStockData(
        selectedMarketValue,
        sorting?.value,
        query
    ) || {};

    const handleChangeSorting = (value: SingleValue<SortingTypes>) => {
        setSorting(value);
    };

    return (
        <div data-testid='app-wrapper'>
            <div className="filter-container">
                <div><MarketFilter selectedMarketValue={selectedMarketValue || ''}/></div>
                <div><SortingFilter selectedSortingValue={sorting} onChange={handleChangeSorting}/></div>
            </div>
            {loading ?  <Loader/> : <Stocks stocks={data} />}
            {error && <h4>API returned an error. Please give it a try after few minutes.</h4>}
            <Pagination previousLink={previousLink} nextLink={nextLink}/>
        </div>
    );
}

export default App;
