import React, { useState } from 'react'
import { ResponsiveContainer, Area, Tooltip, AreaChart } from 'recharts';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
  Image,
  HStack,
  Text
} from '@chakra-ui/react'

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartCard = ({ name, imageUrl, currentPrice, date, chartData }) => {
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart)
  }
  return (
    <div name="card-container" className='w-[250px] h-[350px] px-8 py-5 bg-slate-50 rounded-2xl'>
      
      {/* card 상단 */}
      <div name="card-top" className='bg-slate-100 py-0 flex justify-between items-center'>
        <Text>1</Text>
        <div onClick={handleHeart}>
        {heart ? <AiFillHeart className='text-lg text-red-700'/> : <AiOutlineHeart className='text-lg' />}
        </div>
      </div>

      {/* card 원달러 이미지 */}
      <HStack>
        <Text fontSize='1xl'>
          {name}
          {/* 원/달러 */}
        </Text>
        <Box className='w-[34px] h-[34px]'>
          <Image src='/image/america_flag.png' alt='Dan Abramov' />
        </Box>
      </HStack>

      {/* card 차트 */}
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart width={300} height={100} data={chartData}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#FF0000" fillOpacity={2} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>

      <div name="card-foot" className='flex justify-end'>
          <Stat>
            <StatLabel className='flex justify-end'>전일대비</StatLabel>
            <StatHelpText lineHeight={1} className='flex justify-end items-center'>
              <StatArrow type='increase' />
              <StatNumber>23.6%</StatNumber>
            </StatHelpText>
      </Stat>
      </div>
      <div className='flex justify-between'>
        <Text fontSize='sm' lineHeight={1.2} className='text-slate-500'>현재가</Text>
        <Text fontSize='sm' lineHeight={1.2} className='text-slate-500'>
          1,300원
          {/* {current_Price} */}
        </Text>
      </div>
      <div className=' flex justify-between'>
        <Text fontSize='sm' lineHeight={1.2} className='text-slate-500'>기준일</Text>
        <Text fontSize='sm' lineHeight={1.2} className='text-slate-500'>2024.05.28</Text>
      </div>
    </div>
  )
}



export default ChartCard
