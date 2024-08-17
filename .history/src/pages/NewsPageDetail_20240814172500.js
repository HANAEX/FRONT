import React from "react";
import { Image, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
const NewsPageDetail = () => {
  function truncateText(text, maxLength = 100) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  const text = "'강달러'가 돌아왔다. 24일 원/달러 환율은 1389원에 마감하면서 1400원대 진입을 눈앞에 두고 있다. 주요국 통화 약세가 이어지며 당분간 원/달러 환율은 오를 것이라는 관측이 나온다. 전날(24일) 서울 외환시장에서 원/달러 환율은 전 거래일보다 0.7원 오른 1389.0원에 거래가 마감됐다. 원/달러환율은 전 거래일보다 1.7원 오른 1390.0원으로 개장한 뒤 오전 한때 1391.9원까지 상승했으나 점차 상승 폭을 줄였다."
  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10 mt-10">
      <div className="bg-slate-200 mb-4">
        <Text>
          돌아온 '강달러' ...원/달러 환율, 1400원 터치하나?
        </Text>
        <div>2024년 8월 12일 07:58</div>
      </div>
      <div className='bg-slate-200 mb-4'>
        <div>ChatGPT</div>
        <div>이 기사를 호재로 분석했어요</div>
      </div>
      <Accordion allowToggle className='bg-slate-50'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {truncateText(text)}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            '강달러'가 돌아왔다. 24일 원/달러 환율은 1389원에 마감하면서 1400원대 진입을 눈앞에 두고 있다. 주요국 통화 약세가 이어지며 당분간 원/달러 환율은 오를 것이라는 관측이 나온다. 전날(24일) 서울 외환시장에서 원/달러 환율은 전 거래일보다 0.7원 오른 1389.0원에 거래가 마감됐다. 원/달러환율은 전 거래일보다 1.7원 오른 1390.0원으로 개장한 뒤 오전 한때 1391.9원까지 상승했으나 점차 상승 폭을 줄였다. 이날 원·달러 환율이 상승한 배경에는 스위스 중앙은행의 2회 연속 금리 인하, 영국 영란은행(BOE)의 완화적 금리 동결 등 미국과의 통화정책 차별화가 있다.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div className='h-2 bg-slate-100'>

      </div>
    </div>
  );
};

export default NewsPageDetail;
