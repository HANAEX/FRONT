import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import '../css/style.css';
import 'swiper/css/pagination';

import ToggleSwitch from '../components/Toggle';

const NewsPage = () => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected(!selected);
  };

  return (
    <>
      <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
        <Text fontSize='xl'>02</Text>
        <Text fontSize='3xl'>오늘의 환율 소식</Text>
        <Text fontSize='xl'>외환 전문 AI를 통해 글로벌 외환 소식을 쉽게 접해보세요.</Text>
        
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
        <ToggleSwitch handleToggle={handleToggle()} selected={selected}/>
      </div>
    </>
  )
}

export default NewsPage



