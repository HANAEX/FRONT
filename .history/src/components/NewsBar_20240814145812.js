import React from 'react'

const NewsBar = () => {
  return (
    <div className='bg-slate-300'>
      {/* text box */}
      <div name="textbox">
        <div className='flex gap-1'>
          <div>USD/KRW</div>
          <div>호재</div>
        </div>
      </div>
      <div className='w-[34px] h-[34px]'></div>
    </div>
  )
}

export default NewsBar
