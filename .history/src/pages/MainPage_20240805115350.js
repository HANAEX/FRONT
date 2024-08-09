import React from 'react'
import { Text } from '@chakra-ui/react'

const MainPage = () => {
  return (
    <>
     <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-5'>
      <Text fontSize='5xl'>01</Text>
      <div className='w-full flex-grow bg-slate-400'>
        1
      </div> 
      <div className='w-full h-[30px] bg-slate-600'>
        1
      </div> 
    </div> 
    </>
  )
}

export default MainPage
