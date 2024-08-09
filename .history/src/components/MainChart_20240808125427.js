import { XAxis, YAxis, Area, Tooltip, AreaChart } from 'recharts';
import { rangeData } from '../data/exchange';


import React from 'react'

const MainChart = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={rangeData}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Area dataKey="price" stroke="#8884d8" fill="#8884d8" />
      <Tooltip />
    </AreaChart>

  )
}

export default MainChart