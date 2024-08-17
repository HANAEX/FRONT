import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { SERVER_URL } from "../data/Server_Url";

import "swiper/css";
import "../css/style.css";
import "swiper/css/pagination";

import ToggleSwitch from "../components/Toggle";
import SementicCard from "../components/SementicCard";

const SemanticPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(SERVER_URL + "semanticData.json");
        console.log(result.data);
        setConsumData(result.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    };
    getUseHistory();
  }, []);

  if (!isLoading) return <div>로딩중입니다.</div>;

  return (
    <div className="w-[1140px] h-[calc(100vh-80px)] bg-slate-500 flex py-10 px-10">
      <div className="bg-slate-400 w-[400px]">
        <Text fontSize="xl">03</Text>
        <Text fontSize="3xl">오늘의 환율 온도</Text>
        <Text fontSize="xl">AI가 분석한 환율을 보세요.</Text>
        <div className="h-12"></div>
        <ToggleSwitch
          selected={selected}
          handleToggle={handleToggle}
          direction={"start"}
        />
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SementicCard
            name={consumData[0].name}
            imageUrl={consumData[0].imageUrl}
            faceUrl={consumData[0].faceUrl}
            semantic={consumData[0].semantic}
            persent={consumData[0].persent}
            positive={consumData[0].positive}
            nagative={consumData[0].nagative}
          />
        </SwiperSlide>

        {consumData.map((data, index) => (
          <SwiperSlide>
            <SementicCard
              key={index}
              name={data.name}
              imageUrl={data.imageUrl}
              faceUrl={data.faceUrl}
              semantic={data.semantic}
              persent={data.persent}
              positive={data.positive}
              nagative={data.nagative}
            />
          </SwiperSlide>
        ))}

        {/* {consumData.map((data, index) => {
        <SwiperSlide>
          <SementicCard
            key = {index}
            name = {data.name}
            imageUrl = {data.imageUrl}
            faceUrl = {data.faceUrl}
            semantic = {data.semantic}
            persent = {data.persent}
            positive = {data.positive}
            nagative = {data.nagative}
          />
        </SwiperSlide>
      })} */}
      </Swiper>
    </div>
  );
};

export default SemanticPage;
