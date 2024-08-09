import React from 'react'

const Menu = ({menu_name}) => {
  return (
    <div className='w-[200px] h-10 text-center text-slate-800 leading-10 hover:bg-slate-700 hover:rounded-full hover:text-slate-50'>
      {menu_name}
    </div>
  )
}

export default Menu
