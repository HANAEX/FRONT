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
          <Image src='/image/america_flag.png' alt='Dan Abramov' />
        </Box>
      </HStack>
      <Box className='flex justify-center'>
        <Image src='/image/smile.png' alt='Dan Abramov' />
      </Box>
      <Text fontSize='1xl'>매우긍정적</Text>
      <ProgressBar
        completed={80}
        height='30px'
        bgColor='#1A6AEB'
        className='py-10'
      />
    </div>
  )
}

export default SementicCard
