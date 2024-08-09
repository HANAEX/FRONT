import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleSwitch = ({selected, handleToggle}) => {
  // const [selected, setSelected] = useState(false);

  // const handleToggle = () => {
  //   setSelected(!selected);
  // };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <ButtonGroup isAttached borderRadius="full" size="lg">
        <Button
          onClick={() => handleToggle()}
          colorScheme={selected === false ? 'red' : 'gray'}
          borderRadius="full"
          width="100px"
        >
          호재
        </Button>
        <Button
          onClick={() => handleToggle()}
          colorScheme={selected === true ? 'red' : 'gray'}
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