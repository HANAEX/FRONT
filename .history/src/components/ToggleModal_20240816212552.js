import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleModal = ({ selected, handleToggle, direction }) => {

  return (
    <Box display="flex" justifyContent={direction} alignItems="center" mt={4}>
      <ButtonGroup borderRadius="md" spacing={0} className='bg-slate-200'>
        <Button
          onClick={handleToggle}
          colorScheme={selected ? 'red' : 'gray'}
          width="100px"
          className='rounded-md'
        >
          살래요
        </Button>
        <Button
          onClick={handleToggle}
          colorScheme={!selected ? 'red' : 'gray'}
          width="100px"
          className='rounded-md'
        >
          팔래요
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ToggleModal;