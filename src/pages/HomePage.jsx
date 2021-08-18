import React from 'react';

import { Box } from '@chakra-ui/react';

import BannerBottom from '../assets/components/BannerBottom';
import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';
import Hero from '../assets/components/Hero';
import Presentation from '../assets/components/Presentation';
import Testimonials from '../assets/components/Testimonials';
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
            '2xl': '1000px -120px',
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
        <Box
          bgImage={bgPattern}
          bgPos={{
            sm: '240px 440px',
            sm2: '400px 440px',
            md: '-400px 900px',
            lg: '-550px 1050px',
            lg2: '-500px 1050px',
            xl: '-400px 1100px',
          }}
          bgSize="contain"
          bgRepeat="no-repeat"
          h={{
            sm: '1000px',
            sm2: '1200px',
            md: '2000px',
            lg: '2000px',
            xl: '2000px',
          }}
          w={{ sm: 'full', md: '550px', lg: '750px' }}
          pos="absolute"
          top="0"
          left="0"
          zIndex="hide"
        />
        <Header />
        <Hero />
        <Presentation />
      </Box>
      <Testimonials />
      <BannerBottom />

      <Footer />
    </Box>
  );
};

export default HomePage;
