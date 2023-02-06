import { useLocation } from 'react-router-dom';

export interface URLSearchQueryParams {
  get(name: string): string | null;
}

const useQueryParam = (): URLSearchQueryParams => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default useQueryParam;
