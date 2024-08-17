import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import ExChangeInput from "../components/ExChangeInput";
import ToggleModal from '../components/ToggleModal';

const MainPageDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(true);
  const handleToggle = () => {
    setSelected(!selected);
  };

  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10">
      {/*살때 팔 때 */}
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
      {/*구매 버튼 판매 버튼 */}
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
        <Button colorScheme="teal" variant="outline" height="42px" width="42px">
          <FaBell size="40" />
        </Button>
      </div>

      {/* 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <div className='w-full flex justify-start'>
            <ToggleModal selected={selected} handleToggle={ handleToggle } direction={'center'}/>
          </div>
          <ModalCloseButton />
          <div className='p-4'>
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
