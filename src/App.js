import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import HomePage from './pages/HomePage';
import customTheme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
