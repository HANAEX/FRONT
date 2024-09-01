import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NewsCard = ({ state, title, content, image_url, result }) => {
  return (
    <Link to={"/NewsPageDetail"} name="card-container" className='w-[300px] h-[290px] p-3 bg-slate-50 rounded-2xl'>
      {console.log({ image_url })}
      <img src= { image_url } alt='News Image'  className='object-cover w-full h-10 h-[150px]'/>
      <div name="text-box" className='flex flex-col items-center'>
        <Text fontSize='lg' className='grow py-1' as={'b'}>
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
