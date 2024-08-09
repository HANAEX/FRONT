import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleSwitch = () => {
  const [selected, setSelected] = useState('호재');

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <ButtonGroup isAttached borderRadius="full" size="lg">
        <Button
          onClick={() => handleToggle('호재')}
          colorScheme={selected === '호재' ? 'red' : 'gray'}
          borderRadius="full"
          width="100px"
        >
          호재
        </Button>
        <Button
          onClick={() => handleToggle('악재')}
          colorScheme={selected === '악재' ? 'red' : 'gray'}
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