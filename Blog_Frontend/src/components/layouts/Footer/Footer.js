import React from 'react'
import "./Footer.css"
import Pagination from '../../pagination/Pagination'
const Footer = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div className='footerSection'>
      <div className='container'>
        <footer>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          <p>Powered by Stackup </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer