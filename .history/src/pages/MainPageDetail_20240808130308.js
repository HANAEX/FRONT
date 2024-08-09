import React from 'react'
import MainChart from '../components/MainChart'

const MainPageDetail = () => {
  return (
    <div className='w-[1140px] bg-slate-500 flex flex-col py-10 px-10'>
      <div className='flex justify-center bg-slate-100 rounded-lg'>
        <MainChart />
      </div>
    </div>
  )
}

export default MainPageDetail
