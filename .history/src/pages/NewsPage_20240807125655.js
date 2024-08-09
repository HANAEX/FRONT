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
      <Text fontSize='3xl'>오늘의 환율 소식</Text>
      <Text fontSize='xl'>외환 전문 AI를 통해 글로벌 외환 소식을 쉽게 접해보세요.</Text>
      <div className='w-full flex-grow bg-slate-400 py-5'>
        <div name="chart-box" className='flex justify-center gap-4'>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsPage
