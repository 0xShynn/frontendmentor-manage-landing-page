import React from 'react';

import { Box } from '@chakra-ui/react';

import Header from '../assets/components/Header';
import Hero from '../assets/components/Hero';
import bgPattern from '../assets/icons/bg-tablet-pattern.svg';

const HomePage = () => {
  return (
    <Box h="100vh">
      <Box maxW="1165px" mx="auto">
        <Box
          bgImage={bgPattern}
          bgPos="620px -120px"
          bgSize="contain"
          bgRepeat="no-repeat"
          h="750px"
          w="full"
          pos="absolute"
          zIndex="hide"
        />
        <Header />
        <Hero />
      </Box>
    </Box>
  );
};

export default HomePage;
