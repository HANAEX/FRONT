import React from 'react'
import {
  Box,
  Image,
  HStack,
  Text
} from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
const SementicCard = () => {
  return (
    <div name="card-container" className='w-[300px] h-[450px] p-5 bg-slate-50 rounded-2xl'>
      <HStack>
        <Text fontSize='1xl'>
          원/달러
        </Text>
        <Box className='w-[34px] h-[34px]'>
          <Image src='/image/america_flag.png' alt='america' />
        </Box>
      </HStack>
      <Box className='flex justify-center'>
        <Image src='/image/smile.png' alt='smile' />
      </Box>
      <Text fontSize='1xl'>매우긍정적</Text>
      <ProgressBar
        completed={80}
        height='30px'
        bgColor='#1A6AEB'
        className='py-5'
      />
      <div className='flex justify-between'>
        <div className='flex items-end'>
          <Text fontSize='1xl'>긍정</Text>
          <Text fontSize='2xl' as={'b'}>81.9%</Text>
        </div>
        <div className='flex items-end'>
          <Text fontSize='2xl' as={'b'}>81.9%</Text>
          <Text fontSize='1xl'>부정</Text>
        </div>
      </div>
      <Text fontSize={'sm'} className='flex justify-end text-slate-600 py-10'>자세한 분석 보러가기</Text>
    </div>
  )
}

export default SementicCard
