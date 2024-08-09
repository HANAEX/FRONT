import React from 'react'
import { Image } from '@chakra-ui/react'
const NewsCard = () => {
  return (
    <div name="card-container" className='w-[330px] h-[330px] px-8 py-5 bg-slate-50 rounded-2xl'>
      <Image
        boxSize='100px'
        objectFit='cover'
        src='/image/new_img.png'
        alt='Dan Abramov'
      />
    </div>
  )
}

export default NewsCard
