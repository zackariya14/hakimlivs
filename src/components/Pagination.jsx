import React from 'react';
import './Pagination.css';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className='pagination-container'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </div>
        ))}
      </div>
  );
}

export default Pagination;
