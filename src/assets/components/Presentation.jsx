import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Presentation = () => {
  const PresentationItem = ({ number, title, description }) => (
    <Box
      pl="4"
      w={{ base: 'full', md: '400px', lg: '520px', xl: '590px' }}
      boxSizing="border-box"
      mb="10"
    >
      <Flex
        bg={{ base: 'neutral.red.100', md: 'none' }}
        borderLeftRadius="full"
        align="center"
        mb="2"
      >
        <Box borderRadius="full" px="6" py="2" bg="primary.red">
          <Text color="white" fontWeight="700">
            {number}
          </Text>
        </Box>
        <Text
          ml={{ base: '3', lg: '6' }}
          fontSize="md"
          fontWeight="700"
          color="primary.blue"
        >
          {title}
        </Text>
      </Flex>
      <Text
        color="gray.500"
        fontSize={{ base: 'sm', lg: 'md' }}
        lineHeight={{ base: 'taller', lg: 'tall' }}
        pr={{ base: '6', md: '10', xl: '6' }}
        pl={{ base: '0', md: '78px', lg: '92px' }}
      >
        {description}
      </Text>
    </Box>
  );

  return (
    <Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        pt="24"
      >
        <Box
          textAlign={{ base: 'center', md: 'left' }}
          pb={{ base: '20', md: '0' }}
          px={{ base: '6', md: '10', xl: '6' }}
          maxW={{ base: 'full', md: '540px' }}
        >
          <Heading color="primary.blue" mb={{ base: '4', lg: '6', xl: '8' }}>
            What's different about Manage?
          </Heading>
          <Text
            color="gray.500"
            fontSize={{ base: 'sm', lg: 'md' }}
            lineHeight={{ base: 'taller', lg: 'tall' }}
            maxW="300px"
            mx={{ base: 'auto', md: '0' }}
          >
            Manage provides all the functionality your team needs, without
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Text>
        </Box>
        <Box mb={{ base: '10', md: '0' }} bg="white">
          <PresentationItem
            number="01"
            title="Track company-wide progress"
            description="See how your day-to-day tasks fit into the wider vision. Go form
        tracking progress at the milestone level all the way done to the
        smallest of details. Never lose sight of the bigger picture again."
          />
          <PresentationItem
            number="02"
            title="Advanced built-in reports"
            description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <PresentationItem
            number="03"
            title="Everything you need in one place"
            description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Presentation;
