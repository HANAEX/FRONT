import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const AppOut = () => {
  return (
    <>
      <div className='w-screen flex justify-center bg-slate-300'>
        <NavBar />
      </div>
      <div className='w-screen flex justify-center bg-sky-200'>
        <Outlet />
      </div>
    </>
  )
}

export default AppOut
