// NewBoard.js
import React from 'react'
import { Text, Box } from "@chakra-ui/react";

const NewBoard = ({ boardtext }) => {
  return (
    <div className='p-4 bg-slate-400 rounded-lg mb-4'>
      <div className='flex items-center mb-4'>
        <div className='w-8 h-8 bg-slate-50 rounded-full'></div>
        <Text>성창민짱</Text>
      </div>
      <Text>{boardtext}</Text>
    </div>
  );
};

export default NewBoard;
