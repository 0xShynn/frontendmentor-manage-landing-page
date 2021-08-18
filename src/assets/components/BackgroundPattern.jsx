import React from 'react';

import { Box } from '@chakra-ui/react';

import bgPattern from '../visuals/ui/bg-tablet-pattern.svg';

const BackgroundPattern = props => {
  return (
    <Box
      bgImage={bgPattern}
      bgPos={props.bgPos}
      bgSize="contain"
      bgRepeat="no-repeat"
      h={props.height}
      w={props.width}
      pos="absolute"
      zIndex="hide"
      {...props}
    />
  );
};

export default BackgroundPattern;
