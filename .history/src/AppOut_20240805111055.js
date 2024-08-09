import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const AppOut = () => {
  return (
    <>
      <NavBar />
      <div className='w-screen flex justify-center'>
        <Outlet />
      </div>
    </>
  )
}

export default AppOut
