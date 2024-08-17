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
        <div>돌아온 '강달러'...원/달러 환율, 1400원 터치 하나?</div>
      </div>
      <div className='w-[34px] h-[34px]'></div>
    </div>
  )
}

export default NewsBar
