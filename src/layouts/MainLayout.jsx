import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Contact />
    </>
  )
}

export default MainLayout