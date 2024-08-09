import React from 'react'
import Menu from './Menu'
import { IoPersonCircle } from "react-icons/io5";
import styled, {keyframes}from "styled-components";

const NavBar = () => {
  return (
    <nav className='w-[1140px] h-[60px] bg-slate-400'>
      <div name="nav-container" className='w-full h-full flex items-center justify-between p-3'>
        <div name='logobox' className='flex gap-1'>
          <div name='logo'>로고</div>
          <div name='title'>HanaEX</div>
        </div>
        <div name='menus'className='h-full flex items-center bg-yellow-400'>
          <Menu menu_name="오늘의 환율"/>
          <Menu menu_name="오늘의 뉴스"/>
          <Menu menu_name="게시판"/>
        </div>
        <div name='login'>
          <IoPersonCircle className='w-8 h-8'/>
        </div>
      </div>
    </nav> 
  )
}

export default NavBar

const FlowText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`