import { useColorMode, HStack, Switch } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitch;
