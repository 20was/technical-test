import Select, { components, SingleValue } from 'react-select';
import React from 'react';
import { SORTING_OPTIONS, SortingTypes } from '../../models/SortingTypes';

interface Props {
  selectedSortingValue: SingleValue<SortingTypes>;
  onChange: (value: SingleValue<SortingTypes>) => void;
}

const Option: React.FC = (props: any): JSX.Element => {
  return (
    <div>
      <components.Option {...props} children={props.children} />
    </div>
  );
};

const SortingFilter: React.FC<Props> = ({ selectedSortingValue, onChange }): JSX.Element => {
  return (
    <div data-testid="sorting-filter-wrapper">
      <Select
        options={SORTING_OPTIONS}
        value={selectedSortingValue}
        placeholder="Sorting"
        components={{ Option }}
        onChange={(value: SingleValue<SortingTypes>) => onChange(value)}
      />
    </div>
  );
};
export default SortingFilter;
