import React from 'react';

import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
} from '@chakra-ui/react';

import IconClose from '../svg/IconClose';
import IconHamburger from '../svg/IconHamburger';
import manageLogo from '../svg/logo.svg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = ['Pricing', 'Products', 'About Us', 'Careers', 'Community'];

  return (
    <Flex justify="space-between" align="center" px="6" bg="red.100">
      <Image src={manageLogo} w="146px" alt="Manage Logo" bg="yellow.200" />
      <HStack
        as="nav"
        spacing="8"
        bg="blue.100"
        display={{ base: 'none', md: 'flex' }}
      >
        {navLinks.map(link => (
          <Link
            fontSize="13px"
            fontWeight="500"
            color="primary.blue.200"
            key={link}
          >
            {link}
          </Link>
        ))}
      </HStack>
      <Button variant="primary" display={{ base: 'none', md: 'flex' }}>
        Get Started
      </Button>
      <Flex display={{ md: 'none' }}>
        <IconButton
          colorScheme="whiteAlpha"
          aria-label="Open Menu"
          size="lg"
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <IconHamburger /> : <IconClose />}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
