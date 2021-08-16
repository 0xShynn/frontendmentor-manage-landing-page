import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1920px',
  },
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
    primary: {
      red: 'hsl(12, 88%, 59%)',
      blue: 'hsl(228, 39%, 23%)',
    },
    neutral: {
      blue: {
        grayish: 'hsl(227, 12%, 61%)',
        verydark: 'hsl(233, 12%, 13%)',
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
        shadow: 'xl',
      },
      sizes: {
        sm: {},
        md: {},
        lg: {},
      },
      variants: {
        primary: {
          bg: 'primary.red',
          color: 'white',
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
