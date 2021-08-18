import React from 'react';

import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const BannerBottom = () => {
  return (
    <Box bg="primary.red">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        maxW="1165px"
        mx="auto"
        px={{ base: '6', md: '10', xl: '6' }}
        py={{ base: '20', md: '12', lg: '16' }}
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
