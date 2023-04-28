import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' paddingRight='10px'>
      <Image src={logo} boxSize='45px' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
