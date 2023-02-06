import {MARKETS} from "../../models/Markets";
import Select, {components} from "react-select";
import './styles/filter.css'
import React from "react";


interface Props {
    selectedMarketValue: string;
}

const Option: React.FC = (props: any): JSX.Element => {
    return (
        <a href={`/${props.value}`} className="dropdown-link">
            <components.Option {...props} children={props.children}/>
        </a>
    );
};


const MarketFilter = ({selectedMarketValue}:Props): JSX.Element => {

    return (
        <div data-testid='market-filter-wrapper'>
            <Select
                value={MARKETS.filter((market) =>market.value === selectedMarketValue)}
                options={MARKETS}
                placeholder="Market"
                components={{Option}}
            />
        </div>
    )
}
export default MarketFilter;