export const mockResponse = {
    data: [{
        ticker_symbol: "AAPL",
        trading_item_id: 2590360,
        unique_symbol: "NasdaqGS:AAPL"
    }],
    meta: {
        noResultIfLimit: false,
        real_total_records: 10305,
        state: "read",
        total_records: 10305,
    }
}

export const stocksMock = [
    {
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