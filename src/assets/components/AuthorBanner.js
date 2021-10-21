import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const AuthorBanner = () => {
  return (
    <Flex justify="center" px="4" bg="neutral.blue.superdark">
      <Flex
        py="4"
        px="6"
        textAlign="center"
        align="center"
        rounded="full"
        fontSize="15px"
      >
        <Text color="white" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            textDecoration="underline"
            _hover={{ color: 'primary.red' }}
          >
            Frontend Mentor
          </Link>{' '}
          • Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            textDecoration="underline"
            _hover={{ color: 'primary.red' }}
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-manage-landing-page"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="white"
            transition="0.2s"
            _hover={{ color: 'primary.red' }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default AuthorBanner;
