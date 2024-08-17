import React, {useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react'
import ChartCard from '../components/ChartCard'
import FlowText from '../components/FlowText'
import { SERVER_URL } from '../data/Server_Url'
import axios from 'axios'


const MainPage = () => {
  const [consumData, setConsumData] = useState([]);
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(SERVER_URL + "data.json");
        console.log(result.data.data);
        setConsumData(result.data.data);
      } catch (error) {
        console.log(error);
      } 
      // finally {
        
      // }
    }
    // getUseHistory();
  }, [])

  return (
    <>
    <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>01</Text>
      <Text fontSize='3xl'>오늘의 환율</Text>
      <div className='w-full flex-grow bg-slate-400 py-5'>
        <div name="chart-box" className='flex justify-center gap-4'>
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
      </div>
      <FlowText />
    </div>
    </>
  )
}

export default MainPage
