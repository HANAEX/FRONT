import React, { useState, useEffect } from "react";
import MainChart from "../components/MainChart";
import {
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import ExChangeInput from "../components/ExChangeInput";
import ToggleModal from "../components/ToggleModal";

const MainPageDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  
  const handleToggle = () => {
    setSelected(!selected);
  };

  // 스크롤 이동 함수
  const scrollToSection = (sectionName) => {
    const section = document.querySelector(`div[name="${sectionName}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 스크롤 이벤트를 감지하여 left-section 고정
  useEffect(() => {
    const handleScroll = () => {
      const recommandSection = document.querySelector(`div[name="recommand-section"]`);
      const sectionTop = recommandSection.getBoundingClientRect().top;

      if (sectionTop <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[960px] bg-slate-500 flex flex-col py-1 px-10">
      {/* 살때 팔 때 */}
      <div className="w-full flex justify-center px-48 py-2 rounded-lg my-2 bg-slate-100">
        <Stat className="flex justify-center">
          <StatLabel>내가 살떄</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat className="flex justify-center">
          <StatLabel>내가 팔때</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </div>
      <div className="flex flex-col items-center bg-slate-100 rounded-lg py-5">
        {/* 메인 차트 */}
        <MainChart />
        {/* 최고가 최저가 */}
        <div className="flex gap-3 py-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
            <Text>최저가-최고가</Text>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
            <Text>최저가-최고가</Text>
          </div>
        </div>
      </div>
      {/* 구매 버튼 판매 버튼 */}
      <div className="flex justify-center py-2 bg-slate-100 gap-6 my-2 rounded-lg">
        <Button
          onClick={onOpen}
          colorScheme="teal"
          variant="outline"
          height="42px"
          width="200px"
        >
          살래요
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          height="42px"
          width="200px"
        >
          조회/변경
        </Button>
      </div>
      <div
        name="recommand-section"
        className="p-10 flex bg-slate-300 mt-1 gap-10"
        style={{ overflow: "visible" }}
      > 
        {isFixed && (<div name="fake-section" className='bg-slate-50 p-10 flex-none w-64'></div>)}
        <div
          name="left-section"
          className={`bg-slate-50 p-10 flex-none w-64 ${isFixed ? "fixed top-0 z-10" : ""}`}
          style={{ top: isFixed ? "10px" : "auto" }}
        >
          <div>
            <Text className='text-2xl'>USD/KRW</Text>
            <Image src="/image/america_flag.png"></Image>
          </div>
          <div
            name="1"
            onClick={() => scrollToSection("1-1")}
            className="cursor-pointer"
          >
            투자포인트
          </div>
          <div
            name="2"
            onClick={() => scrollToSection("1-2")}
            className="cursor-pointer"
          >
            추천주식
          </div>
          <div
            name="3"
            onClick={() => scrollToSection("1-3")}
            className="cursor-pointer"
          >
            추천상품
          </div>
        </div>
        <div name="right-section" className="bg-slate-50 p-10 flex-1">
          <div name="1-1" className="bg-slate-400 h-72 mt-6"></div>
          <div name="1-2" className="bg-slate-400 h-72 mt-6"></div>
          <div name="1-3" className="bg-slate-400 h-72 mt-6"></div>
        </div>
      </div>

      {/* 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <div className="w-full flex justify-start">
            <ToggleModal
              selected={selected}
              handleToggle={handleToggle}
              direction={"center"}
            />
          </div>
          <ModalCloseButton />
          <div className="p-4">
            <ExChangeInput />

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MainPageDetail;

