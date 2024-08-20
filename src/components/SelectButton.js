import React from "react";
import { Button } from "@chakra-ui/react";
const SelectButton = ({ onOpen, handleSelectClick }) => {
  const handleOpenClick = () => {
    onOpen();
    handleSelectClick();
  };
  return (
    <Button 
      colorScheme="blue"
      mr={3}
      onClick={handleOpenClick}
      variant="outline"
      height="42px"
      width="200px"
    >
      조회/변경
    </Button>
  );
};

export default SelectButton;
