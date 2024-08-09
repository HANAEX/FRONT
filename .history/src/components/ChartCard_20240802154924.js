import React from 'react'
import { LineChart, Line, ResponsiveContainer, Area } from 'recharts';

const data = [
  {
    uv: 4000,
    pv: 2400,
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
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartCard = () => {
  return (
    <div name="card-contrainer" className='w-[340px] h-[340px] p-8 bg-slate-50'>
      <h1>원달러</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
          <Area type="monotone" dataKey="close" stroke={false} strokeWidth={2}
            fillOpacity={1} fill="url(#colorUv)" />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  )
}

export default ChartCard
