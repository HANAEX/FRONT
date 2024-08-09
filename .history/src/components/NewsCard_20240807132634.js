import React from 'react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const NewsCard = () => {
  return (
    <div name="card-container" className='w-[250px] h-[250px] p-5 bg-slate-50 rounded-2xl'>
      <img src='/image/new_img.png' alt='News Image'  className='object-cover w-full h-[150px] rounded-xl'/>

      <div name="text-box" className='flex flex-col items-center'>
        <Text fontSize='xl'>
          연준금리 낮춘다는데 ...왜?
        </Text>
      </div>
    </div>
  )
}

export default NewsCard
