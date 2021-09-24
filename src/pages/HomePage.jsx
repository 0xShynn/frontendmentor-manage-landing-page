import React from 'react';

import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import BackgroundPattern from '../assets/components/BackgroundPattern';
import BannerBottom from '../assets/components/BannerBottom';
import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';
import Hero from '../assets/components/Hero';
import Presentation from '../assets/components/Presentation';
import Testimonials from '../assets/components/Testimonials';

const HomePage = () => {
  const siteTitle = 'Manage';
  const description =
    'Manage makes it simple for software teams to plan day-to-day tasks while keeping larger teams in goal view.';
  return (
    <Box h="100vh">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle} | Home</title>
        <link
          rel="canonical"
          href="https://anhek-manage-landing-page.netlify.app"
        />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/s/76yqxwpcsvuwqkd/manage-ogimage.jpg?raw=1"
        />
      </Helmet>
      <Box maxW="1165px" mx="auto">
        <BackgroundPattern
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
          height={{ base: '450px', sm: '550px', lg: '750px' }}
          width="full"
          top="0"
          right="0"
        />
        <BackgroundPattern
          bgPos={{
            sm: '240px 440px',
            sm2: '400px 440px',
            md: '-400px 900px',
            lg: '-550px 1050px',
            lg2: '-500px 1050px',
            xl: '-400px 1100px',
          }}
          height={{
            sm: '1000px',
            sm2: '1200px',
            md: '2000px',
            lg: '2000px',
            xl: '2000px',
          }}
          width={{ sm: 'full', md: '550px', lg: '750px' }}
          top="0"
          left="0"
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
