// FxModal
import React from "react";
import {
  Text,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import ToggleModal from "../components/ToggleModal";
import WonInput from "../components/WonInput";
import ExChangeInput from "../components/ExChangeInput";
import Calendar from 'react-calendar';
import Clander from '../components/Clander';

const FxModal = ({
  selected,
  handleToggle,
  format,
  parse,
  wonValue,
  setWonValue,
  exchangeValue,
  setExchangeValue,
  calculatedValue,
  onClose,
  onPurchaseClick,
}) => {
  return (
    <ModalContent className="px-6">
      <Text className="py-4 font-semibold text-lg">거래하기</Text>
      <div className="w-full flex justify-start">
        <ToggleModal
          selected={selected}
          handleToggle={handleToggle}
          direction={"center"}
        />
      </div>
      {/* 환율 고르기 */}
      <div className="flex justify-between items-center pt-3">
        <Text className="text-xl leading-0 text-slate-600">구매환율</Text>
        <Text className="px-2 py-1 rounded-sm bg-slate-400">바로구매</Text>
      </div>
      {/* 원 input */}
      <WonInput
        format={format}
        parse={parse}
        wonValue={wonValue}
        setWonValue={setWonValue}
      />
      <Text>즉시거래할 현재 환율을 선택했어요</Text>

      {/* 원하는 금액 input */}
      <Text>원하는 금액</Text>
      <ExChangeInput value={exchangeValue} setValue={setExchangeValue} />
      {/* 달력 */}
      <Clander />
      {/* 환산금액 */}
      <Text>환산금액</Text>
      <Text name="cal-ex">{calculatedValue}</Text>
      <ModalCloseButton />
      <div>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button name="구매하기" variant="ghost" onClick={onPurchaseClick}>구매하기</Button>
        </ModalFooter>
      </div>
    </ModalContent>
  );
};

export default FxModal;
