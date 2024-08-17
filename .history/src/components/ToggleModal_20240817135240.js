import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleModal = ({ selected, handleToggle, direction }) => {
  return (
    // <Box justifyContent={direction} className='flex items-center'>
    //   <ButtonGroup borderRadius="md" className='bg-slate-200'>
    //     <Button
    //       onClick={handleToggle}
    //       colorScheme={selected ? 'red' : 'gray'}
    //       width="100px"
    //       className='rounded-md'
    //     >
    //       살래요
    //     </Button>
    //     <Button
    //       onClick={handleToggle}
    //       colorScheme={!selected ? 'red' : 'gray'}
    //       width="100px"
    //       className='rounded-md'
    //     >
    //       팔래요
    //     </Button>
    //   </ButtonGroup>
    // </Box>

    <div className='flex justify-center items-center'>
      <div name="button-group" className='flex rounded-md bg-slate-200'>
        <div onClick={handleToggle} className={`w-100px rounded-md ${selected ? 'red' : 'gray'}`}>살래요</div>
        <div onClick={handleToggle} className={`w-100px rounded-md ${!selected ? 'red' : 'gray'}`}>팔래요</div>
      </div>
    </div>

  );
};

export default ToggleModal;