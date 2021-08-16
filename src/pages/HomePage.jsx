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
          bgPos={{
            base: '50px -50px',
            sm: '80px -50px',
            sm2: '120px -150px',
            md: '450px -150px',
            lg: '560px -180px',
            lg2: '700px -180px',
            xl: '780px -120px',
          }}
          bgSize="contain"
          bgRepeat="no-repeat"
          h={{ base: '450px', sm: '550px', lg: '750px' }}
          w="full"
          pos="absolute"
          top="0"
          right="0"
          zIndex="hide"
        />
        <Header />
        <Hero />
        <Box h="200px" bg="gray.100"></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
