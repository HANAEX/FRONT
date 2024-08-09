import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleSwitch = ({ selected, handleToggle }) => {

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <ButtonGroup borderRadius="full" size="lg" spacing={0} className='bg-slate-300'>
        <Button
          onClick={handleToggle}
          colorScheme={selected ? 'red' : 'gray'}
          borderRadius="full"
          width="100px"
        >
          호재
        </Button>
        <Button
          onClick={handleToggle}
          colorScheme={!selected ? 'red' : 'gray'}
          borderRadius="full"
          width="100px"
        >
          악재
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ToggleSwitch;