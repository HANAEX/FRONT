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
  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10 mt-10">
      <div>
        <Text className="bg-slate-200">
          돌아온 '강달러' ...원/달러 환율, 1400원 터치하나?
        </Text>
        <div>2024년 8월 12일 07:58</div>
      </div>
      <div>
        <div>ChatGPT</div>
        <div>이 기사를 호재로 분석했어요</div>
      </div>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div></div>
    </div>
  );
};

export default NewsPageDetail;
