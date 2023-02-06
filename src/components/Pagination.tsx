import React, {FC} from 'react';
import {URLPageLink} from "../hooks/useGetStockData";
import './styles/pagination.css'

interface Props {
    previousLink: URLPageLink;
    nextLink: URLPageLink;
}

const Pagination: FC<Props> = ({previousLink, nextLink}): JSX.Element => {

    return (
        <div className='pagination-wrapper' >
            <a href={previousLink || ''} className={'pagination-button ' + (!previousLink ? 'disabled-button' : '')}>Previous</a>
            <a href={nextLink || ''} className={'pagination-button ' + (!nextLink ? 'disabled-button' : '')}> Next</a>
        </div>
    );
};

export default Pagination;
