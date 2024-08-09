import React from 'react'
import MainChart from '../components/MainChart'
import {
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react'
const MainPageDetail = () => {
  return (
    <div className='w-[1140px] bg-slate-500 flex flex-col py-10 px-10'>
      {/*살때 팔 때 */}
      <div className='w-full flex justify-center px-48 py-10 bg-slate-100'>
        <Stat className='flex justify-center'>
          <StatLabel>내가 살떄</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat className='flex justify-center'>
          <StatLabel>내가 팔때</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
          </StatHelpText>
        </Stat>
        </div>
      <div className='flex flex-col items-center bg-slate-100 rounded-lg py-5'>

        {/* 메인 차트 */}
        <MainChart />
        {/* 최고가 최저가 */}
        <div className='flex gap-3'>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 bg-slate-500 rounded-full'></div>
            <Text>최저가-최고가</Text>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 bg-slate-500 rounded-full'></div>
            <Text>최저가-최고가</Text>
          </div>
        </div>
        {/* 구매 판매하기 */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default MainPageDetail
