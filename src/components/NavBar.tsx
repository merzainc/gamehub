import { HStack, Image, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <HStack>
      <Image src='/logo.webp' boxSize='45px' />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
