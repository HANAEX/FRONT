import React from 'react'
import {
  Text,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import ReservedCard from '../components/ReservedCard';

const SelectModal = ({onClose, onPurchaseClick, transactionHistory}) => {
  const handleCloseAndPurchase = () => {
    onClose();
    onPurchaseClick();
  };
  return (
    <ModalContent className="px-6">
      <Text className="py-4 font-semibold text-lg">거래내역</Text>
      <ModalCloseButton />
      {transactionHistory.map((data, index) => (
        <ReservedCard
          key={index}
          type={data.type}
          date={data.date}
          value={data.value}
          rangeDate={data.rangeDate}
          exchangeValue={data.exchangeValue}
        />
      ))}
      <ReservedCard/>
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
