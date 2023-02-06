import { useLocation } from 'react-router-dom';

export interface URLSearchParams {
  get(name: string): string | null;
}

const useQuery = (): URLSearchParams => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default useQuery;
