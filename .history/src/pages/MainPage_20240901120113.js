import React, {useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react'
import ChartCard from '../components/ChartCard'
import FlowText from '../components/FlowText'
// import { SERVER_URL } from '../data/Server_Url'
import axios from 'axios'


const MainPage = () => {
  const [consumData, setConsumData] = useState([]);
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/mainpage");
        // console.log(result.data.data[1]);
        setConsumData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUseHistory();
  }, [])

  return (
    <>
    <div className='w-[1140px] h-[calc(100vh-80px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>01</Text>
      <Text fontSize='3xl'>오늘의 환율</Text>
      <Text fontSize='xl'>한 눈에 오늘의 환율 정보를 확인해 보세요.</Text>
      <div className='w-full flex-grow bg-slate-400 py-5'>
        <div name="chart-box" className='flex justify-center gap-4'>
          {consumData.map((data, index) => (
            <ChartCard 
              key={index}
              index={data.index}
              name={data.name}
              imageUrl={data.imageUrl}
              currentPrice={data.currentPrice}
              increase={data.increase}
              date={data.date}
              chartData={data.chartData}            
            />
          ))}
        </div>
      </div>
      <FlowText />
    </div>
    </>
  )
}

export default MainPage
