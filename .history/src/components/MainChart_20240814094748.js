import { XAxis, YAxis, Area, Line, Tooltip, AreaChart } from 'recharts';
import { Button, ButtonGroup } from '@chakra-ui/react';

import React, { useState } from 'react'

import { rangeData } from '../data/exchange';

const MainChart = () => {

  const [timeRange, setTimeRange] = useState('3M');

  const filterData = (range) => {
    switch (range) {
      case '1D':
        return rangeData.slice(0, 1);
      case '1M':
        return rangeData.slice(0, 30);
      case '3M':
        return rangeData.slice(0, 90);
      case '6M':
        return rangeData.slice(0, 180);
      case '1Y':
        return rangeData;
      default:
        return rangeData;
    }
  }
  const filtered_rangeData = filterData(timeRange);

  const processedData = filtered_rangeData.map((entry) => ({
    day: entry.day,
    priceHigh: entry.price[0],
    priceLow: entry.price[1],
    기준율: (entry.price[0] + entry.price[1]) / 2,  // 매매기준율을 평균으로 설정
  }));

  return (
    <div>
      <div>
        {/* <AreaChart
          width={900}
          height={350}
          data={filtered_rangeData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis domain={[1300, 1450]}/>
          <Area dataKey="price" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart> */}
        <AreaChart
          width={900}
          height={350}
          data={processedData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis domain={[1300, 1450]} />
          <Area dataKey="priceHigh" stroke="#8884d8" fill="#8884d8" />
          {/* <Line type="monotone" dataKey="기준율" stroke="#ff7300" /> */}
          <Tooltip />
        </AreaChart>
      </div>
      <div className='w-full flex justify-center items-center'>
        <ButtonGroup variant="outline">
        <Button 
            colorScheme={timeRange === '1D' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1D')}
          >
            1D
          </Button>
          <Button 
            colorScheme={timeRange === '1M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1M')}
          >
            1M
          </Button>
          <Button 
            colorScheme={timeRange === '3M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('3M')}
          >
            3M
          </Button>
          <Button 
            colorScheme={timeRange === '6M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('6M')}
          >
            6M
          </Button>
          <Button 
            colorScheme={timeRange === '1Y' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1Y')}
          >
            1Y
          </Button>
        </ButtonGroup>
      </div>
    </div>

    

  )
}

export default MainChart