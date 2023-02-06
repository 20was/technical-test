export interface SortingTypes {
  value: string;
  label: string;
}

export const SORTING_OPTIONS: SortingTypes[] = [
  {
    value: 'desc',
    label: 'Market Cap High to Low',
  },
  {
    value: 'asc',
    label: 'Market Cap Low to High',
  },
];

export const DEFAULT_SORTING_OPTIONS = SORTING_OPTIONS[0];
