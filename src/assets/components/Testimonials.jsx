import React from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import ReactElasticCarousel from 'react-elastic-carousel';

import usersTestimonials from '../utils/usersTestimonials';

const Testimonials = () => {
  const variant = useBreakpointValue({ base: 1, sm2: 2, md: 2, lg: 3, lg2: 3 });

  const CircleIcon = props => (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <circle cx="17.25" cy="12.25" r="8" fill="currentColor" />
        <path
          d="M17.25 6.25c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-4c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"
          fill="hsl(12, 88%, 59%)"
        />
      </svg>
    </Icon>
  );

  return (
    <Flex
      justify="center"
      direction="column"
      my={{ base: '12', md: '24', lg: '28', xl: '44' }}
      maxW="1460px"
      mx="auto"
    >
      <Heading mb="16" fontWeight="700" textAlign="center" color="primary.blue">
        What they've said
      </Heading>
      <Box>
        <ReactElasticCarousel
          itemsToShow={variant}
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Flex
                direction="row"
                mt="6"
                display={{ base: 'flex', lg: 'none' }}
              >
                {pages.map(page => {
                  const isActivePage = activePage === page;
                  return (
                    <CircleIcon
                      key={page}
                      onClick={() => onClick(page)}
                      color={isActivePage ? 'primary.red' : 'white'}
                      boxSize="4"
                      cursor="pointer"
                    />
                  );
                })}
              </Flex>
            );
          }}
        >
          {usersTestimonials.map((item, index) => (
            <Flex
              key={index}
              maxW="100%"
              direction="column"
              align="center"
              textAlign="center"
              pos="relative"
              px="3"
              cursor="pointer"
            >
              <Image
                src={item.avatar}
                h="70px"
                w="70px"
                pos="absolute"
                top="0"
                alt={`Avatar of ${item.name}`}
              />
              <Box
                bg="neutral.gray.100"
                px="4"
                pt="14"
                minH={{ base: '250px', md: '250px', lg: '250px', xl: '220px' }}
                mt="35px"
                rounded="md"
              >
                <Heading mb="4" fontSize="16" as="h3">
                  {item.name}
                </Heading>
                <Text color="gray.600" fontSize="sm" lineHeight="taller">
                  {item.testimonial}
                </Text>
              </Box>
            </Flex>
          ))}
        </ReactElasticCarousel>
        <Flex justify="center" mt={{ base: '10', md: '12' }}>
          <Button variant="primary">Get Started</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Testimonials;
