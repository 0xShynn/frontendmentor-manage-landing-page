import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {
    sm: '375px',
    sm2: '560px',
    md: '768px',
    lg: '1024px',
    lg2: '1240px',
    xl: '1440px',
    '2xl': '1920px',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontSize: '16px',
        fontFamily: 'body',
        bg: 'white',
      },
    },
  },
  fonts: {
    heading: '"Be Vietnam"',
    body: '"Be Vietnam"',
  },
  colors: {
    primary: {
      red: 'hsl(12, 88%, 59%)',
      blue: 'hsl(228, 39%, 23%)',
    },
    neutral: {
      blue: {
        grayish: 'hsl(227, 12%, 61%)',
        verydark: 'hsl(233, 12%, 13%)',
        superdark: '#18191f',
      },
      red: {
        100: 'hsl(13, 100%, 96%)',
      },
      gray: {
        100: 'hsl(0, 0%, 98%)',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {},
      variants: {
        content: {},
      },
    },
    Button: {
      baseStyle: {
        rounded: 'full',
      },
      sizes: {
        sm: {
          px: '7',
          py: '5',
          fontSize: 'xs',
        },
        md: {
          px: '8',
          py: '6',
          fontSize: 'sm',
        },
        lg: {},
      },
      variants: {
        primary: {
          bg: 'primary.red',
          color: 'white',
          boxShadow: '0px 12px 20px -10px rgba(255,90,40,0.8);',
          _hover: {
            opacity: '.7',
          },
        },
        white: {
          bg: 'white',
          color: 'primary.red',
          boxShadow: '0px 12px 20px -10px rgba(0,0,0,0.3);',
          _hover: {
            opacity: '.8',
          },
        },
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
