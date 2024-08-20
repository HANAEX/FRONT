import React from "react";
import { Button } from "@chakra-ui/react";
const SelectButton = ({ onOpen, handleSelectClick }) => {
  const handleCloseAndPurchase = () => {
    onOpen();
    handleSelectClick();
  };
  return (
    <Button colorScheme="blue" mr={3} onClick={handleCloseAndPurchase}>
      Close
    </Button>
  );
};

export default SelectButton;
