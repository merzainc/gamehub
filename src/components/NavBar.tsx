import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' paddingRight='10px'>
      <Image src='/logo.webp' boxSize='45px' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
