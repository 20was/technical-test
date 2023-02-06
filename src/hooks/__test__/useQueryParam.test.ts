import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from 'react-router-dom';
import useQueryParam from "../useQueryParam";
import {queryParamMock} from "../../mocks/queryParamMock";

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
}));

describe('useQueryParam', () => {
    beforeEach(() => {(useLocation as jest.MockedFunction<typeof useLocation>).mockReset();
    });

    it('returns URLSearchParams from location.search', () => {
        (useLocation as jest.MockedFunction<typeof useLocation>).mockReturnValue(queryParamMock);

        const { result } = renderHook(() => useQueryParam());
        expect(result.current.get('page')).toBe('2');
    });
});