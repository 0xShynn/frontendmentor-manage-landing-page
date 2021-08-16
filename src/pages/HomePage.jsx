import React from 'react';

import { Box } from '@chakra-ui/react';

import Header from '../assets/components/Header';

const HomePage = () => {
  return (
    <Box h="100vh" bg="gray.100">
      <Box maxW="1140px" mx="auto">
        <Header />
      </Box>
    </Box>
  );
};

export default HomePage;
