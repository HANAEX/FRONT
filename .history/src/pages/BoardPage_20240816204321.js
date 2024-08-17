import React from 'react'
import { Text } from '@chakra-ui/react'

const BoardPage = () => {
  return (
    <div className='w-[1140px] h-[calc(100vh-80px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>04</Text>
      <Text fontSize='3xl'>오늘의 핫한 게시판</Text>
    </div>
  )
}

export default BoardPage
