import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios'
import { SERVER_URL } from '../data/Server_Url'

import "swiper/css";
import '../css/style.css';
import 'swiper/css/pagination';

import ToggleSwitch from '../components/Toggle';

const NewsPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(SERVER_URL + "newsData.json");
        console.log(result.data);
        setConsumData(result.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    }
    getUseHistory();
  }, [])

  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected(!selected);
  };

  function truncateText(text, maxLength = 20) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  if (!isLoading) return <div>로딩중입니다.</div>

  return (
    <>
    {console.log(truncateText(consumData[0].content))}
    {console.log(consumData)}
      <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
        <Text fontSize='xl'>02</Text>
        <Text fontSize='3xl'>오늘의 환율 소식</Text>
        <Text fontSize='xl'>외환 전문 AI를 통해 글로벌 외환 소식을 쉽게 접해보세요.</Text>
        
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <NewsCard 
              title={consumData[0].title}
              content={consumData[0].content}
              semantic={ truncateText(consumData[0].semantic) }
            />
          </SwiperSlide>
          {/* <SwiperSlide><NewsCard /></SwiperSlide>
          <SwiperSlide><NewsCard /></SwiperSlide>
          <SwiperSlide><NewsCard /></SwiperSlide>
          <SwiperSlide><NewsCard /></SwiperSlide> */}
        </Swiper>
        <ToggleSwitch selected={selected} handleToggle={handleToggle} direction={'center'}/>
      </div>
    </>
  )
}

export default NewsPage



