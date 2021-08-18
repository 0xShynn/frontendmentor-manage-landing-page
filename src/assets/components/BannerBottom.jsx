import React from 'react';

import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import bgPattern from '../visuals/ui/bg-tablet-pattern.svg';

const BannerBottom = () => {
  return (
    <Box bg="primary.red" overflow="hidden" pos="relative">
      <Box
        bgImage={bgPattern}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity=".1"
        h="600px"
        w="130%"
        bgPos={{
          base: '-400px 80px',
          md: '-200px 40px',
          lg: '0 40px',
          xl: '160px -60px',
        }}
        pos="absolute"
        zIndex="base"
        overflow="hidden"
      />
      <Box
        bgImage={bgPattern}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity=".1"
        h="600px"
        w="130%"
        bgPos={{
          lg: '1100px -500px',
          xl: '1200px -500px',
        }}
        pos="absolute"
        zIndex="base"
        overflow="hidden"
        display={{ base: 'none', lg: 'block' }}
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        maxW="1165px"
        mx="auto"
        px={{ base: '6', md: '10', xl: '6' }}
        py={{ base: '20', md: '12', lg: '16' }}
        pos="relative"
        zIndex="base"
      >
        <Box maxW="500px">
          <Heading
            color="white"
            fontSize={{ base: '40px', md: '40px' }}
            textAlign={{ base: 'center', md: 'left' }}
            mb={{ base: '6', md: '0' }}
          >
            Simplify how your team works today.
          </Heading>
        </Box>
        <Button variant="white">Get Started</Button>
      </Flex>
    </Box>
  );
};

export default BannerBottom;
