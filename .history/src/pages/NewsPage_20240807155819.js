import React from 'react'
import { Text } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import '../css/style.css';
import 'swiper/css/pagination';

import styled from "styled-components";

const NewsPage = () => {
  // const options = [
  //   { label: '01:00', value: '1' },
  //   { label: '01:30', value: '1.5' },
  //   { label: '02:00', value: '2' }
  // ];

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

      </div>
    </>
  )
}

export default NewsPage

const BtnWrapper = styled.div`
  display: flex;
  z-index; 0;
`;

const CheckBox = styled.input`
  diplay: none;
`

const ButtonLable = styled.label`
  z-index: 10;
  width: 12rem;
  height: 3rem;
  border-radius: 2em;
  background-color: #2196F3;

  ::before {
    display: flex;
    position: absolute;
    content : "긍정";
    padding-left : center;
    justify-content: flex-start;
    align-items: center;
    width: 10rem;
    height: 3rem;
    color: #2196F3;
    font-size: 12px;
    transition: all 0.2s ease-in-out;
  }
  ::after {
    display: flex;
    position: relative;
    content : "부정";
    padding-left : center;
    justify-content: flex-start;
    align-items: center;
    width: 6rem;
    height: 3rem;
    color: #2196F3;
    font-size: 12px;
    transition: all 0.2s ease-in-out;
  }
`


