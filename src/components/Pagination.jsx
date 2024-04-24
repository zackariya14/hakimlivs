
import React from 'react';
import "./Pagination.css";

const Pagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)} 
          className={currentPage === page ? 'active' : ''} 
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;