// MainPageDetail
import React, { useState, useEffect } from "react";
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
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";

import MainRecommandButton from "../components/MainRecommandButton";
import StockBox from "../components/StockBox";
import Account from "../components/Account";
import MainChart from "../components/MainChart";
import FxModal from "../modal/FxModal";
import axios from "axios";
import DireactModal from '../modal/DireactModal';
import ReserveModal from '../modal/ReserveModal';

const MainPageDetail = () => {
  // current price 받아오기
  const [consumData, setConsumData] = useState([]);
  const [currentInvestPrice, setCurrentInvestPrice] = useState(0);
  const [currentSellPrice, setCurrentSellPrice] = useState(0);
  const [isPriceLoading, setIsPriceLoading] = useState(false);
  const [showClander, setShowClander] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  // Modal 관련 변수
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [modalType, setModalType] = useState("FxModal");

  // WonInput 관련 변수
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const [wonValue, setWonValue] = useState(0);
  const [exchangeValue, setExchangeValue] = useState(0); // ExChangeInput 값을 저장할 상태
  const [calculatedValue, setCalculatedValue] = useState(0); // 계산 결과를 저장할 상태

  // 토글 핸들러
  const handleToggle = () => {
    setSelected(!selected);
  };

  // axios
  // 내가 살떄 내가 팔때 받아오는 코드
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/api/detail/current"
        );
        const currentData = result.data.data;
        setConsumData(currentData);
        setCurrentInvestPrice(currentData.invest);
        setCurrentSellPrice(currentData.sell);
        setWonValue(currentData.invest);
        console.log(currentData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPriceLoading(true);
      }
    };
    getUseHistory();
  }, []);

  // wonValue 또는 exchangeValue가 변경될 때 계산 수행
  useEffect(() => {
    const result = parseFloat(exchangeValue) * parseFloat(wonValue);
    setCalculatedValue(isNaN(result) ? 0 : result.toFixed(2)); // 소수점 2자리까지 결과 표시
  }, [exchangeValue, wonValue]);

  useEffect(() => {
    if (wonValue === currentInvestPrice) {
      setShowClander(true);
    } else {
      setShowClander(false);
    }
  }, [wonValue, currentInvestPrice])

  // 스크롤과 고정 로직
  const scrollToSection = (sectionName) => {
    const section = document.querySelector(`div[name="${sectionName}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const recommandSection = document.querySelector(
        `div[name="recommand-section"]`
      );
      const sectionTop = recommandSection.getBoundingClientRect().top;

      setIsFixed(sectionTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Modal type 변경
  const handlePurchaseClick = () => {
    if (wonValue === currentInvestPrice) {
      setModalType("DirectModal");
    } else {
      setModalType("ReserveModal");
    }
  };

  useEffect(() => {
    console.log(value)
  }, [value]);


  // FxModal로 돌아가는 기능 추가
  const handleBackToFxModal = () => {
    setModalType("FxModal");
  };

  if (!isPriceLoading) return <div>로딩중입니다.</div>;

  return (
    <div className="w-[960px] bg-slate-500 flex flex-col py-1 px-10">
      {console.log()}
      {/* 살 때 팔 때 */}
      <div className="w-full flex justify-center px-48 py-2 rounded-lg my-2 bg-slate-100">
        <Stat className="flex justify-center">
          <StatLabel>내가 살 때</StatLabel>
          <StatNumber>{currentInvestPrice}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat className="flex justify-center">
          <StatLabel>내가 팔 때</StatLabel>
          <StatNumber>{currentSellPrice}</StatNumber>
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
        {isFixed && (
          <div
            name="fake-section"
            className="bg-slate-50 px-5 py-5 flex-none w-56"
          ></div>
        )}
        <div
          name="left-section"
          className={`bg-slate-50 px-5 py-5 flex-none w-56 ${
            isFixed ? "fixed top-0 z-10" : ""
          }`}
          style={{ top: isFixed ? "10px" : "auto" }}
        >
          <div className="flex items-center mb-1">
            <Text className="text-2xl">USD/KRW</Text>
            <Image boxSize={"42px"} src="/image/america_flag.png"></Image>
          </div>

          <MainRecommandButton
            text={"투자포인트"}
            scrollToSection={() => scrollToSection("1-1")}
          />
          <MainRecommandButton
            text={"추천주식"}
            scrollToSection={() => scrollToSection("1-2")}
          />
          <MainRecommandButton
            text={"추천상품"}
            scrollToSection={() => scrollToSection("1-3")}
          />
        </div>
        <div name="right-section" className="bg-slate-50 p-5 flex-1">
          <div name="1-1" className="bg-slate-400 h-80 mt-6"></div>
          <div name="1-2" className="bg-slate-400 h-80 mt-6 px-6 py-3">
            <Text className="text-xl font-semibold leading-0">
              주식추전 TOP 3
            </Text>
            <Divider className="my-3" orientation="horizontal" />
            <div className="flex justify-around">
              <StockBox />
              <StockBox />
              <StockBox />
            </div>
          </div>
          <div name="1-3" className="bg-slate-400 h-80 mt-6 px-6 py-3">
            <Text className="text-xl font-semibold leading-0">상품추천</Text>
            <Divider className="my-3" orientation="horizontal" />
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
        {modalType === "FxModal" && (
          <FxModal
            selected={selected}
            handleToggle={handleToggle}
            format={format}
            parse={parse}
            wonValue={wonValue}
            setWonValue={setWonValue}
            exchangeValue={exchangeValue}
            setExchangeValue={setExchangeValue}
            calculatedValue={calculatedValue}
            onClose={onClose}
            onPurchaseClick={handlePurchaseClick} // 구매 버튼 클릭 핸들러
            showClander={showClander}
            value={value}
            setValue={setValue}
          />
        )}
        {modalType === "DirectModal" && 
          <DireactModal 
            onClose={onClose}
            onPurchaseClick={handleBackToFxModal}
            value={value}
          />}
        {modalType === "ReserveModal" && <ReserveModal />}
      </Modal>
    </div>
  );
};

export default MainPageDetail;
