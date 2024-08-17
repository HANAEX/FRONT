import React from 'react'

const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='bg-slate-400 px-4 py-2 mb-1 cursor-pointer' onClick={scrollToSection}>
      {text}
    </div>
  )
}

export default MainRecommandButton
