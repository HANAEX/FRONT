import React from 'react'
import Menu from './Menu'
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-[1140px] h-[60px] bg-slate-200'>
      <div name="nav-container" className='w-full h-full flex items-center justify-between p-3'>
        <div name='logobox' className='flex gap-1'>
          <div name='logo'>로고</div>
          <div name='title'>HanaEX</div>
        </div>
        <div name='menus'className='h-full flex items-center bg-yellow-400'>
          <Link to={"/"}><Menu menu_name="오늘의 환율"/></Link>
          <Link to={"/News"}><Menu menu_name="오늘의 뉴스"/></Link>
          <Link to={"/Board"}><Menu menu_name="게시판"/></Link>
        </div>
        <div name='login'>
          <IoPersonCircle className='w-8 h-8'/>
        </div>
      </div>
    </nav> 
  )
}

export default NavBar
