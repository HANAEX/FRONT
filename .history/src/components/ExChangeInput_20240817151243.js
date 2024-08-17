import React from "react";
import { 
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react'

const ExChangeInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        $
      </InputLeftElement>
      <Input placeholder="원하시는 금액을 입력하세요" />
      <InputRightElement>
        USD
      </InputRightElement>
    </InputGroup>
  );
};

export default ExChangeInput;
