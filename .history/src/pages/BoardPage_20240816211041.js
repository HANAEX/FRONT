import React from 'react'
import { Text } from '@chakra-ui/react'
import BoradCard from '../components/BoradCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const BoardPage = () => {
  return (
    <div className='w-[1140px] h-[calc(100vh-80px)] bg-slate-500 flex flex-col py-10 px-10'>
      <Text fontSize='xl'>04</Text>
      <Text fontSize='3xl'>오늘의 핫한 게시판</Text>
      <Text fontSize='xl'>사람들과 외환에 대해서 이야기를 나눠 보세요.</Text>
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
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BoardPage
