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
import Clander from "../components/Clander";

const FxModal = ({
  selected,
  handleToggle,
  format,
  parse,
  wonValue,
  vendWonValue,
  setWonValue,
  setVendWonValue,
  exchangeValue,
  setExchangeValue,
  calculatedValue,
  onClose,
  onPurchaseClick,
  showClander,
  value,
  setValue,
  handleSetValue,
  Image,
}) => {
  //
  const handleSetValueAndClose = () => {
    onClose();
    handleSetValue();
  };

  return (
    <ModalContent className="px-6">
      <div className="flex justify-center">
        <Text className="py-4 font-semibold text-xl mb-2">거래하기</Text>
      </div>
      <div className="w-full flex justify-start">
        <ToggleModal
          selected={selected}
          handleToggle={handleToggle}
          direction={"center"}
        />
      </div>
      <Image
        boxSize="2rem"
        borderRadius="full"
        src="/image/usd_flag.png"
        alt="Fluffybuns the destroyer"
        mr="12px"
      />
      <Text>1,344.62</Text>
      {/* 환율 고르기 */}
      <div className="flex justify-between items-center pt-3 mb-1">
        <Text className="font-bold text-xl leading-0 text-slate-600">
          구매환율
        </Text>
        <Text className="px-2 py-1 rounded-sm bg-slate-400">즉시거래</Text>
      </div>
      {/* 원 input */}
      <WonInput
        selected={selected}
        format={format}
        parse={parse}
        wonValue={wonValue}
        vendWonValue={vendWonValue}
        setWonValue={setWonValue}
        setVendWonValue={setVendWonValue}
      />
      <Text className="text-slate-700 my-2">
        즉시거래할 현재 환율을 선택했어요
      </Text>

      {/* 원하는 금액 input */}
      <Text className="font-bold text-xl leading-0 text-slate-800 mb-1">
        원하는 금액
      </Text>
      <ExChangeInput value={exchangeValue} setValue={setExchangeValue} />
      {/* 달력 */}
      {showClander && <Clander value={value} setValue={setValue} />}
      {/* 환산금액 */}

      <div className="flex mt-2">
        <Text className="font-normal text-xl text-slate-700">환산금액</Text>
        <Text className="font-normal text-xl text-slate-700 mx-2">
          {calculatedValue}
        </Text>
        <Text className="font-normal text-xl text-slate-700">약 KRW</Text>
      </div>
      <ModalCloseButton />

      <div>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSetValueAndClose}>
            Close
          </Button>
          <Button name="구매하기" variant="ghost" onClick={onPurchaseClick}>
            구매하기
          </Button>
        </ModalFooter>
      </div>
    </ModalContent>
  );
};

export default FxModal;
