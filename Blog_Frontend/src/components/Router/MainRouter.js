import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Adminlayouts from '../AdminPanel/Adminlayouts'
import { Route, Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='admin' element={<Adminlayouts />} />
      </Routes>
    </>
  )
}

export default MainRouter