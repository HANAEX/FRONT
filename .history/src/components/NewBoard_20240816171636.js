import React from 'react'
import {
  Text,
  Image,
} from "@chakra-ui/react";
const NewBoard = ({boardtext}) => {
  return (
    <div className='p-4bg-slate-400'>
      <div className='flex items-center'>
        <div className='w-8 h-8 bg-slate-50 rounded-full'></div>
        <Text>성창민짱</Text>
      </div>
      <Text>{boardtext}</Text>
    </div>
  )
}

export default NewBoard
