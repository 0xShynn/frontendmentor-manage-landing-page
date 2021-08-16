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
      fontSize="sm"
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
      zIndex="overlay"
      px="6"
      pt={{ base: '6', md: '10', lg: '16' }}
    >
      <Link href="#">
        <Image
          src={manageLogo}
          w={{ base: '120px', md: '146px' }}
          alt="Manage Logo"
          mt="3"
        />
      </Link>

      <HStack
        as="nav"
        spacing="8"
        display={{ base: 'none', lg: 'flex' }}
        px="3"
      >
        {navLinks.map(link => (
          <NavLink key={link + Math.random()}>{link}</NavLink>
        ))}
      </HStack>

      <Button variant="primary" display={{ base: 'none', lg: 'flex' }}>
        Get Started
      </Button>

      <Flex display={{ lg: 'none' }}>
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
          bg="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);"
          h="100vh"
          display={{ base: 'flex', lg: 'none' }}
          w="full"
          onClick={isOpen ? onClose : onOpen}
          justifyContent="flex-end"
          pos="absolute"
          pt="110px"
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
