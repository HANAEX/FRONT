import React from 'react'
import { Image } from '@chakra-ui/react'
const NewsCard = () => {
  return (
    <div name="card-container" className='w-[330px] h-[330px] p-5 bg-slate-50 rounded-2xl'>
      <img src='/image/news_image.jpg' alt='News Image'  className='object-cover w-full h-8'/>
    </div>
  )
}

export default NewsCard
