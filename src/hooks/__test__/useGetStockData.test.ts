import { renderHook } from '@testing-library/react-hooks';
import useGetStockData from '../useGetStockData';
import { DEFAULT_MARKET } from '../../models/Markets';
import { DEFAULT_SORTING_OPTIONS } from '../../models/SortingTypes';
import { act } from '@testing-library/react';
import { mockResponse } from '../../mocks/stocks';

jest.mock('../useQueryParam', () => ({
  URLSearchQueryParams: {
    get: jest.fn().mockReturnValue(2),
  },
}));

describe('useGetStockData', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify(mockResponse))));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns expected data', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetStockData(DEFAULT_MARKET, DEFAULT_SORTING_OPTIONS.value, new Map())
    );
    await act(async () => {
      expect(result.current).toEqual({
        data: [],
        error: false,
        loading: true,
        nextLink: null,
        previousLink: null,
      });
      await waitForNextUpdate();
    });
    expect(result.current).toEqual({
      data: mockResponse.data,
      error: false,
      loading: false,
      nextLink: '?page=2',
      previousLink: null,
    });
  });
});
