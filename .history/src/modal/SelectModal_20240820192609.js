import React from 'react'
import {
  Text,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const SelectModal = ({onClose, onPurchaseClick}) => {
  const handleCloseAndPurchase = () => {
    onClose();
    onPurchaseClick();
  };
  return (
    <ModalContent className="px-6">
      <Text className="py-4 font-semibold text-lg">거래하기</Text>
      {/* 환율 고르기 */}
      <div className="flex justify-between items-center pt-3">
        <Text className="text-xl leading-0 text-slate-600">구매환율</Text>
        <Text className="px-2 py-1 rounded-sm bg-slate-400">바로구매</Text>
      </div>
      <Text>즉시거래할 현재 환율을 선택했어요</Text>

      {/* 원하는 금액 input */}
      <Text>원하는 금액</Text>
      <ModalCloseButton />

      <div>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCloseAndPurchase}>
            Close
          </Button>
          <Button name="구매하기" variant="ghost" onClick={handleCloseAndPurchase}>구매하기</Button>
        </ModalFooter>
      </div>
    </ModalContent>
  )
}

export default SelectModal
