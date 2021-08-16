import React from 'react';

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import IllustrationIntro from '../icons/illustration-intro.svg';

const Hero = () => {
  return (
    <Box mt={{ base: '8', lg: '24' }}>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        justify="space-between"
        px="6"
      >
        <Box
          maxW="570px"
          textAlign={{ base: 'center', md: 'left' }}
          bg="red.100"
        >
          <Heading
            as="h1"
            color="primary.blue"
            fontSize={{ base: '36', lg: '54' }}
            mb={{ base: '4', lg: '10' }}
            mt={{ base: '2', md: '8', lg: '16' }}
            maxW="440px"
          >
            Bring everyone together to build better products.
          </Heading>
          <Text color="gray.500" maxW="340px" mb="10">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping larger teams in goal view.
          </Text>
          <Button variant="primary">Get Started</Button>
        </Box>
        <Flex justify="center">
          <Image
            src={IllustrationIntro}
            w={{ base: '400px', lg: '480px', xl: '570px' }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
