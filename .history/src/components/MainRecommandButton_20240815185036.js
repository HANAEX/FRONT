import React from 'react'

const MainRecommandButton = ({text, onClick}) => {
  return (
    <div className='bg-slate-400 px-2 py-2 mb-1 cursor-pointer' onClick={onClick}>
      {text}
    </div>
  )
}

export default MainRecommandButton
