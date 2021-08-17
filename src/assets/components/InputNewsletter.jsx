import React from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const InputNewsletter = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.newsletter}>
          <Flex>
            <Input
              id="newsletter"
              placeholder="Updates in your inbox..."
              w={{ base: 'full', sm: '60', md: '40', lg: '64' }}
              rounded="full"
              bg="white"
              px="6"
              color="gray.700"
              fontSize="sm"
              mr="2"
              {...register('newsletter', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />

            <Button
              variant="primary"
              size="sm"
              shadow="none"
              type="submit"
              isLoading={isSubmitting}
            >
              GO
            </Button>
          </Flex>
          <Box pl="4">
            <FormErrorMessage fontSize="xs">
              {errors.newsletter && errors.newsletter.message}
            </FormErrorMessage>
          </Box>
        </FormControl>
      </form>
    </Flex>
  );
};

export default InputNewsletter;