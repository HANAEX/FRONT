import React from 'react'
import Menu from './Menu'

const NavBar = () => {
  return (
    <nav className='w-[1140px] h-[70px] bg-slate-400'>
      <div name="nav-container" className='w-full h-full flex items-center justify-between p-3'>
        <div name='logo-title'>
          
        </div>
        <div name='menus'className='h-full flex items-center bg-yellow-400'>
          <Menu menu_name="오늘의 환율"/>
          <Menu menu_name="오늘의 뉴스"/>
          <Menu menu_name="게시판"/>
        </div>
        <div name='login'>
          로그인
        </div>
      </div>
    </nav> 
  )
}

export default NavBar
