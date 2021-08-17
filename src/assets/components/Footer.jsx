import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import IconFacebook from '../icons/icon-facebook.svg';
import IconInstagram from '../icons/icon-instagram.svg';
import IconPinterest from '../icons/icon-pinterest.svg';
import IconTwitter from '../icons/icon-twitter.svg';
import IconYoutube from '../icons/icon-youtube.svg';
import ManageLogo from '../icons/logo-white.svg';

const Footer = () => {
  const socialIcons = [
    IconFacebook,
    IconYoutube,
    IconTwitter,
    IconPinterest,
    IconInstagram,
  ];

  const navLinks = ['Home', 'Pricing', 'Products', 'About Us'];
  const navLinks2 = ['Careers', 'Community', 'Privacy Policy'];

  const copyrightText = 'Copyright 2020. All rights reserved.';

  return (
    <Box bg="neutral.blue.verydark">
      <Flex
        direction={{ base: 'column-reverse', md: 'column' }}
        align={{ base: 'center', md: 'flex-start' }}
        maxW="1165px"
        mx="auto"
        px={{ base: '6', md: '10', xl: '6' }}
        py={{ base: '12', md: '12', lg: '16' }}
      >
        <Text
          color="neutral.blue.grayish"
          textAlign="center"
          fontSize="sm"
          display={{ md: 'none' }}
        >
          {copyrightText}
        </Text>

        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          justify={{ base: 'flex-start', md: 'space-between' }}
          align={{ base: 'center', md: 'flex-start' }}
          w="full"
          mx="auto"
        >
          {/* Logo + Social Icons */}
          <Flex
            direction={{ base: 'column-reverse', md: 'column' }}
            h="36"
            justifyContent="space-between"
          >
            <Image
              src={ManageLogo}
              width="160px"
              mb={{ base: '10', md: '20' }}
              mx={{ base: 'auto', md: '0' }}
            />
            <HStack
              spacing={{ base: '4', sm: '10', md: '4' }}
              mb={{ base: '12', md: '0' }}
            >
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  width={{ base: '24px', sm: '30px', md: '20px' }}
                />
              ))}
            </HStack>
          </Flex>

          {/* Navigation links */}
          <Flex
            justify="space-between"
            w={{ base: '48', sm: '60', md: '48', lg: '60' }}
            mb={{ base: '12', md: '0' }}
            h="36"
          >
            <VStack
              align="flex-start"
              justifyContent="space-between"
              fontSize="sm"
            >
              {navLinks.map((link, index) => (
                <Link color="white" key={index}>
                  {link}
                </Link>
              ))}
            </VStack>
            <VStack align="flex-start" spacing="5" fontSize="sm">
              {navLinks2.map((link, index) => (
                <Link color="white" key={index}>
                  {link}
                </Link>
              ))}
            </VStack>
          </Flex>

          {/* Search box */}
          <Flex
            direction="column"
            h={{ base: '24', md: '36' }}
            justifyContent="space-between"
            align="flex-end"
          >
            <Flex>
              <InputGroup>
                <Input
                  placeholder="Updates in your inbox..."
                  rounded="full"
                  bg="white"
                  px="6"
                  fontSize="sm"
                  mr="2"
                  w={{ base: 'full', md: '40', lg: '64' }}
                />
                <Button variant="primary" size="sm" shadow="none" type="submit">
                  GO
                </Button>
              </InputGroup>
            </Flex>
            <Flex>
              <Text
                color="neutral.blue.grayish"
                fontSize="sm"
                display={{ base: 'none', md: 'flex' }}
              >
                {copyrightText}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
