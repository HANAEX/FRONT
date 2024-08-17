// NewBoard.js
import React from 'react'
import { Text, Box } from "@chakra-ui/react";

const NewBoard = ({ boardtext }) => {
  return (
    <Box p="4" bg="slate-400" borderRadius="md" mb="4">
      <Box display="flex" alignItems="center" gap="2" mb="2">
        <Box w="8" h="8" bg="slate-50" borderRadius="full"></Box>
        <Text>성창민짱</Text>
      </Box>
      <Text>{boardtext}</Text>
    </Box>
  );
};

export default NewBoard;
