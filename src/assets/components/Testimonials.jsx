import React from 'react';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import usersTestimonials from '../utils/usersTestimonials';

const Testimonials = () => {
  return (
    <Box bg="red.100">
      <Flex justify="center" direction="column">
        <Heading>What they've said</Heading>
        <Box bg="gray.300">
          {usersTestimonials.map((item, index) => (
            <Box key={item[index]} bg="blue.100" maxW="200px">
              <Image src={item.avatar} h="20" w="20" />
              <Heading>{item.name}</Heading>
              <Text>{item.testimonial}</Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonials;
