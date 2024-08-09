import React from 'react'
import { Text } from '@chakra-ui/react'

const NewsPage = () => {
  return (
    // <div>
    //   NewsPage
    // </div>
    <>
      <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>02</Text>
      <Text fontSize='4xl'>오늘의 환율 소식</Text>
      <div className='w-full flex-grow bg-slate-400 py-5'>
        <div name="chart-box" className='flex justify-center gap-4'>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsPage
