import React from 'react'
import Footer from '../pages/Shared/Footer'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router'

const RootlayOut = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar> </Navbar>
        <Outlet> </Outlet>
        <Footer> </Footer>
    </div>
  )
}

export default RootlayOut