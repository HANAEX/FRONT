import React from 'react'
import { Text } from '@chakra-ui/react'
import ChartCard from '../components/ChartCard'

const MainPage = () => {
  return (
    <>
     <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>01</Text>
      <Text fontSize='3xl'>오늘의 환율</Text>
      <div className='w-full flex-grow bg-slate-400'>
        <div name="chart-box" className='flex justify-center gap-4'>
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
          {/* <div className='w-[100vh] h-4 bg-slate-50' ></div> */}
        </div>
      </div> 
      <div className='w-full h-[30px] bg-slate-600'>
        1
      </div> 
    </div> 
    </>
  )
}

export default MainPage
