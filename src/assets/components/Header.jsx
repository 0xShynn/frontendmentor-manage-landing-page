import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import IconClose from '../icons/IconClose';
import IconHamburger from '../icons/IconHamburger';
import manageLogo from '../icons/logo.svg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = ['Pricing', 'Products', 'About Us', 'Careers', 'Community'];

  const NavLink = ({ children }) => (
    <Link
      fontSize="md"
      fontWeight="700"
      color="primary.blue"
      _hover={{ color: 'neutral.blue.grayish' }}
      href="#"
    >
      {children}
    </Link>
  );

  return (
    <Flex
      justify="space-between"
      align="center"
      px="6"
      bg="white"
      py="10"
      as=""
    >
      <Link href="#">
        <Image
          src={manageLogo}
          w={{ base: '120px', md: '146px' }}
          alt="Manage Logo"
        />
      </Link>

      <HStack
        as="nav"
        spacing={{ md: '4', lg: '8' }}
        display={{ base: 'none', md: 'flex' }}
        px="4"
      >
        {navLinks.map(link => (
          <NavLink key={link + Math.random()}>{link}</NavLink>
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
          icon={isOpen ? <IconClose /> : <IconHamburger />}
          zIndex="overlay"
        />
      </Flex>

      {isOpen ? (
        <Box
          bg="linear-gradient(360deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);"
          h="100vh"
          display={{ base: 'flex', md: 'none' }}
          w="full"
          onClick={isOpen ? onClose : onOpen}
          justifyContent="flex-end"
          pos="absolute"
          pt="90px"
          top="0"
          left="0"
          zIndex="dropdown"
        >
          <VStack
            bg="white"
            w={{ base: 'full', sm: '80' }}
            py="10"
            m="6"
            rounded="md"
            h="fit-content"
            shadow="sm"
            spacing="5"
          >
            {navLinks.map(link => (
              <NavLink key={link + Math.random()}>{link}</NavLink>
            ))}
          </VStack>
        </Box>
      ) : null}
    </Flex>
  );
};

export default Header;
