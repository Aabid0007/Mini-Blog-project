import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='Btn_action'>
      <button className={`btn ${currentPage === 1 ? "disabled" : ''}`} onClick={handlePrevPage}>Previous</button>
      <button className={`btn ${currentPage === totalPages ? "disabled" : ''}`} onClick={handleNextPage}>Next »</button>
    </div>
  );
};

export default Pagination;