import React from 'react'

const Menu = ({manu_name}) => {
  return (
    <div className='w-[200px] h-10 text-center text-slate-800 leading-10 hover:bg-slate-700 hover:rounded-full hover:text-slate-50'>
      {manu_name}
    </div>
  )
}

export default Menu
