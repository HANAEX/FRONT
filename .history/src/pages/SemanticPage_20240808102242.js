import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import '../css/style.css';
import 'swiper/css/pagination';

import ToggleSwitch from '../components/Toggle';

const SemanticPage = () => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected(!selected);
  };
  return (
    <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex py-10 px-10'>
    <div className='bg-slate-400'>
      <Text fontSize='xl'>03</Text>
      <Text fontSize='3xl'>오늘의 환율 온도</Text>
      <Text fontSize='xl'>AI가 분석한 환율을 보세요.</Text>
      <ToggleSwitch selected={selected} handleToggle={handleToggle}/>
    </div>
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><NewsCard /></SwiperSlide>
      <SwiperSlide><NewsCard /></SwiperSlide>
      <SwiperSlide><NewsCard /></SwiperSlide>
      <SwiperSlide><NewsCard /></SwiperSlide>
      <SwiperSlide><NewsCard /></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default SemanticPage
