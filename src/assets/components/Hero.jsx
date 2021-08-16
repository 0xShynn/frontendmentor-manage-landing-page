import React from 'react';

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import IllustrationIntro from '../icons/illustration-intro.svg';

const Hero = () => {
  return (
    <Box mt="24">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        px="6"
      >
        <Box maxW="570px">
          <Heading
            as="h1"
            color="primary.blue"
            fontSize="54"
            mb="10"
            mt="16"
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
        <Box>
          <Image src={IllustrationIntro} w="570px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
