import React, { useState } from 'react'
import { ResponsiveContainer, Area, Tooltip, AreaChart } from 'recharts';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Image,
  HStack,
  Text
} from '@chakra-ui/react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
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

const ChartCard = () => {
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart)
  }


  return (
    <div name="card-container" className='w-[250px] h-[280px] px-8 py-5 bg-slate-50 rounded-2xl'>

      <div name="card-top" className='bg-slate-100 py-0 flex justify-between items-center'>
        <Text>1</Text>
        <div onClick={handleHeart}>
        {heart ? <CiHeart className='w-5 h-5'/> : <FaHeart />}
        </div>
      </div>

      <HStack>
        <Text fontSize='1xl'>
          원/달러
        </Text>
        <Box className='w-[28px] h-[28px]'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        {/* <div className='w-[28px] h-[28px] bg-slate-400'></div> */}
      
      </HStack>

      <ResponsiveContainer width="100%" height="60%">
        <AreaChart width={300} height={100} data={data}>
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

      {/* <StatGroup>
        <Stat px={3}>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat px={3}>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>  */}

    </div>
  )
}

export default ChartCard
