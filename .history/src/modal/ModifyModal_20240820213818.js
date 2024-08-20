import React, { useState } from 'react';
import {
  Text,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input
} from "@chakra-ui/react";

const ModifyModal = ({ onClose, transaction, onUpdate }) => {
  const [updatedValue, setUpdatedValue] = useState(transaction.value);
  const [updatedExchangeValue, setUpdatedExchangeValue] = useState(transaction.exchangeValue);

  const handleUpdate = () => {
    onUpdate(updatedValue, updatedExchangeValue);
  };

  ReservedCard 클릭 시 거래 내역 수정 기능 추가
  1. 상태 관리 및 Modal 수정
  ReservedCard를 클릭할 때, 해당 거래 내역의 value와 exchangeValue를 수정할 수 있는 Modal을 구현합니다.
  
  MainPageDetail.js
  기능 추가: transactionHistory의 특정 거래 내역을 수정할 수 있도록 selectedTransaction 상태를 추가했습니다.
  기능 추가: handleReservedCardClick 함수를 통해 선택된 거래 내역을 수정할 수 있는 Modal을 표시합니다.
  javascript
  코드 복사
  const MainPageDetail = () => {
    // 거래 내역 저장용 상태 변수
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null); // 선택된 거래 내역 상태
  
    // Modal 관련 변수
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalType, setModalType] = useState("FxModal");
  
    // ReservedCard 클릭 시 호출되는 함수
    const handleReservedCardClick = (index) => {
      setSelectedTransaction({ ...transactionHistory[index], index });
      setModalType("ReservedModal");
      onOpen();
    };
  
    // ReservedModal에서 값이 변경될 때 호출되는 함수
    const handleTransactionUpdate = (updatedValue, updatedExchangeValue) => {
      setTransactionHistory((prevHistory) =>
        prevHistory.map((item, idx) =>
          idx === selectedTransaction.index
            ? { ...item, value: updatedValue, exchangeValue: updatedExchangeValue }
            : item
        )
      );
      onClose();
    };
  
    // 기존 코드 생략...
  };
  SelectModal.js
  기능 추가: ReservedCard 클릭 시 handleReservedCardClick를 호출합니다.
  javascript
  코드 복사
  const SelectModal = ({ onClose, onPurchaseClick, transactionHistory, handleReservedCardClick }) => {
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
            onClick={() => handleReservedCardClick(index)} // 클릭 핸들러 추가
          />
        ))}
        <div>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    );
  };
  ReservedCard.js
  기능 추가: onClick 핸들러를 받아, 카드 클릭 시 해당 핸들러를 호출합니다.
  javascript
  코드 복사
  const ReservedCard = ({ type, date, value, rangeDate, exchangeValue, onClick }) => {
    return (
      <div onClick={onClick} className="cursor-pointer">
        <div className='flex'>
          <div>{type}</div>
          <div>예약</div>
        </div>
        <div className='flex'>
          <div>
            <Image />
            <div>USD {exchangeValue}</div>
          </div>
          <div>예약완료</div>
        </div>
        <div className='flex mb-3'>
          <div>{value}</div>
          <div>{date}</div>
        </div>
        <Divider />
      </div>
    );
  };
  ReservedModal.js
  기능 추가: 거래 내역의 value와 exchangeValue를 수정할 수 있는 Modal을 구현합니다.
  javascript
  코드 복사
  import React, { useState } from 'react';
  import {
    Text,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    Button,
    Input
  } from "@chakra-ui/react";
  
  const ReservedModal = ({ onClose, transaction, onUpdate }) => {
    const [updatedValue, setUpdatedValue] = useState(transaction.value);
    const [updatedExchangeValue, setUpdatedExchangeValue] = useState(transaction.exchangeValue);
  
    const handleUpdate = () => {
      onUpdate(updatedValue, updatedExchangeValue);
    };
  
    return (
      <ModalContent className="px-6">
        <Text className="py-4 font-semibold text-lg">거래 내역 수정</Text>
        <Input
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          placeholder="거래 금액 수정"
        />
        <Input
          value={updatedExchangeValue}
          onChange={(e) => setUpdatedExchangeValue(e.target.value)}
          placeholder="환율 수정"
          mt={4}
        />
        <ModalCloseButton />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
            수정
          </Button>
          <Button onClick={onClose}>취소</Button>
        </ModalFooter>
      </ModalContent>
    );
}

export default ModifyModal
