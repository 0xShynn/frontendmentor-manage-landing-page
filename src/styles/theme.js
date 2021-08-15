import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {},
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontSize: '16px',
        fontFamily: 'body',
      },
    },
  },
  fonts: {
    heading: '"Be Vietnam"',
    body: '"Be Vietnam"',
  },
  colors: {
    primary: {},
    neutral: {},
  },
  components: {
    Container: {
      baseStyle: {},
      variants: {
        content: {},
      },
    },
    Button: {
      baseStyle: {},
      sizes: {
        sm: {},
        md: {},
        lg: {},
      },
      variants: {
        primary: {},
      },
    },

    Heading: {
      baseStyle: {
        color: 'gray.800',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.800',
      },
    },
  },
});

export default customTheme;
