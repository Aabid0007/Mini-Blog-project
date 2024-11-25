import React from 'react'
import "./Footer.css"
import Pagination from '../../pagination/Pagination'
import { useNavigate } from 'react-router-dom';
const Footer = ({ currentPage, totalPages, onPageChange }) => {
  const navigate = useNavigate();
const AdminPanelClick=() =>(
  navigate('/admin')
)
  return (
    <div className='footerSection'>
      <div className='container'>
        <footer>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          <p>Powered by Stackup </p>
          <button onClick={AdminPanelClick()}>Admin Panel</button>
        </footer>
      </div>
    </div>
  )
}

export default Footer