import React from 'react'
import Header from '../common/Header'
import AdminForm from './AdminForm/AdminForm'
import './Adminlayouts.css'
const Adminlayouts = () => {
  return (
    <div className='MainPage'>
      <div className='container'>
        <div className='Main_Heading'>
          <Header name={"Admin Panel"} />
        </div >
        <AdminForm />
      </div>
    </div>
  )
}

export default Adminlayouts