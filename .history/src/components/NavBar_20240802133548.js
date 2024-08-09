import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-[1140px] h-[70px] bg-slate-400'>
      <div name="nav-container" className='w-full h-full flex items-center justify-between p-3'>
        <div name='logo-title'>
          
        </div>
        <div name='menus'className='h-full flex items-center bg-yellow-400'>
          <div>메뉴1</div>
          <div>메뉴2</div>
          <div>메뉴3</div>
        </div>
        <div name='login'>
          로그인
        </div>
      </div>
    </nav> 
  )
}

export default NavBar
