import {useCallback, useEffect, useState} from "react";
import {DEFAULT_MARKET} from "../models/Markets";
import {DEFAULT_SORTING_OPTIONS} from "../models/SortingTypes";
import {URLSearchQueryParams} from "./useQueryParam";
import {Stock} from "../models/Stock";
import { DEFAULT_PAGE_NUMBER, PER_PAGE_SIZE} from "../constants/Stocks";
import {API_ENDPOINT} from "../constants/Secrets";

export type URLPageLink = string | null;

export const QUERY_PARAMS: Record<string, string> = {
    page: 'page',
};



const useGetStockData = (
    selectedMarket: string = DEFAULT_MARKET,
    selectedSorting: string = DEFAULT_SORTING_OPTIONS.value,
    query: URLSearchQueryParams,
) => {

    const [data, setData] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const [currentPage] = useState<number>(Number(query.get(QUERY_PARAMS.page)) || DEFAULT_PAGE_NUMBER);
    const [previousLink, setPreviousLink] = useState<URLPageLink>(null);
    const [nextLink, setNextLink] = useState<URLPageLink>(null);


    const handlePagination = useCallback(
        ({ total_records }:{total_records:number}): void => {
            const pages = Math.ceil(total_records / PER_PAGE_SIZE);
            setPreviousLink(currentPage - 1 >= 1 ? `?page=${currentPage - 1}` : null);
            setNextLink(currentPage + 1 <= pages ? `?page=${currentPage + 1}` : null);
        },
        [currentPage, setPreviousLink, setNextLink]
    );

    const fetchStockData = useCallback(async (): Promise<Response> => {
        const sortRule = ['order_by', 'market_cap', selectedSorting];

        const defaultResponseRules = [
            ['primary_flag', '=', true],
            ['grid_visible_flag', '=', true],
            ['market_cap', 'is_not_null'],
            ['is_fund', '=', false],
        ];

        const marketSelectionRule = selectedMarket === 'global' ? [] : [['country_name', 'in', [selectedMarket]]];

        const rules = JSON.stringify([sortRule, ...defaultResponseRules, ...marketSelectionRule]);

        const requestPayload = {
            id: '0',
            no_result_if_limit: false,
            offset: currentPage ? PER_PAGE_SIZE * (currentPage - 1): 0,
            size: PER_PAGE_SIZE,
            state: 'read',
            rules
        };

        return await fetch(API_ENDPOINT as string, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestPayload)
        });
    }, [currentPage, selectedMarket, selectedSorting]);

    useEffect(() => {
        setLoading(true);
        fetchStockData()
            .then(response => response.json())
            .then(data => {
                setData(data?.data);
                handlePagination(data?.meta);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [fetchStockData,
        setData,
        setLoading,
        setError,
        handlePagination,
        selectedMarket,
        selectedSorting]);

    return {
        data,
        loading,
        error,
        previousLink,
        nextLink
    }

}
export default useGetStockData;