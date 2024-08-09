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
      <Input placeholder="Enter amount" />
      <InputRightElement>
        USD
      </InputRightElement>
    </InputGroup>
  );
};

export default ExChangeInput;
