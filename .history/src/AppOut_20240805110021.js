import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const AppOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppOut
