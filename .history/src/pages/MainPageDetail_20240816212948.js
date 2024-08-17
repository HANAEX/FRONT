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
  Divider
} from "@chakra-ui/react";
import ExChangeInput from "../components/ExChangeInput";
import ToggleModal from "../components/ToggleModal";
import MainRecommandButton from '../components/MainRecommandButton';
import StockBox from '../components/StockBox';
import Account from '../components/Account';

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
        className="px-3 py-5 flex bg-slate-300 mt-1 gap-5"
        style={{ overflow: "visible" }}
      > 
        {isFixed && (<div name="fake-section" className='bg-slate-50 px-5 py-5 flex-none w-56'></div>)}
        <div
          name="left-section"
          className={`bg-slate-50 px-5 py-5 flex-none w-56 ${isFixed ? "fixed top-0 z-10" : ""}`}
          style={{ top: isFixed ? "10px" : "auto" }}
        >
          <div className='flex items-center mb-1'>
            <Text className='text-2xl'>USD/KRW</Text>
            <Image boxSize={'42px'} src="/image/america_flag.png"></Image>
          </div>

          <MainRecommandButton text={"투자포인트"} scrollToSection={() => scrollToSection("1-1")} />
          <MainRecommandButton text={"추천주식"} scrollToSection={() => scrollToSection("1-2")} />
          <MainRecommandButton text={"추천상품"} scrollToSection={() => scrollToSection("1-3")} />
        </div>
        <div name="right-section" className="bg-slate-50 p-5 flex-1">
          <div name="1-1" className="bg-slate-400 h-80 mt-6"></div>
          <div name="1-2" className="bg-slate-400 h-80 mt-6 px-6 py-3">
            <Text className='text-xl font-semibold leading-0'>주식추전 TOP 3</Text>
            <Divider className='my-3' orientation='horizontal'/>
            <div className='flex justify-around'>
              <StockBox />
              <StockBox />
              <StockBox />
            </div>
          </div>
          <div name="1-3" className="bg-slate-400 h-80 mt-6 px-6 py-3">
            <Text className='text-xl font-semibold leading-0'>상품추천</Text>
            <Divider className='my-3' orientation='horizontal'/>
              <Account />
              <Account />
              <Account />
          </div>
          <div name="1-4" className="bg-slate-400 h-80 mt-6 px-6 py-3"></div>
        </div>
      </div>

      {/* 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <Text className='py-3 px-3 font-semibold'>거래하기</Text>
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

