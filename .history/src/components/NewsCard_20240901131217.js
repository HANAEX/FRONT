import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NewsCard = ({ state, title, content, image_url, result }) => {
  return (
    <Link to={"/NewsPageDetail"} name="card-container" className='w-[300px] h-[290px] p-3 bg-slate-50 rounded-2xl'>
      {console.log({ image_url })}
      <img src= { image_url } alt='News Image'  className='object-cover w-full h-[140px]'/>
      <div name="text-box" className='flex flex-col items-center'>
        <Text className='text- font-semibold grow py-1'>
          { title }
        </Text>
        <Text fontSize={'sm'} lineHeight={1} className='h-[42px] bg-slate-400 grow text-center text-slate-600'>
          { content }
        </Text>
        <Text fontSize={'xl'} as={'b'} className='grow'>
          { result }
        </Text>
      </div>
    </Link>
  )
}

export default NewsCard
