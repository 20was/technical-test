import React, { FC } from 'react';
import './styles/pagination.css';
import { URLPageLink } from '../hooks/useGetStockData';
import config from '../configs/config.json'

interface Props {
  previousLink: URLPageLink;
  nextLink: URLPageLink;
}

const Pagination: FC<Props> = ({ previousLink, nextLink }): JSX.Element => {
  return (
    <div className="pagination-wrapper">
      <a href={previousLink || ''} className={'pagination-button ' + (!previousLink ? 'disabled-button' : '')}>
        {config.pagination.previousButtonText}
      </a>
      <a href={nextLink || ''} className={'pagination-button ' + (!nextLink ? 'disabled-button' : '')}>
        {config.pagination.nextButtonText}
      </a>
    </div>
  );
};

export default Pagination;
