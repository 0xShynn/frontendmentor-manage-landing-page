import React from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  newsletter: yup
    .string()
    .email('Please insert a valid email')
    .required('An email is required'),
});

const InputNewsletter = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        <FormControl isInvalid={errors.newsletter} id="newsletter">
          <FormLabel display="none" color="red">
            Sign up newsletter form
          </FormLabel>
          <Flex>
            <Input
              id="newsletter"
              placeholder="Updates in your inbox..."
              _placeholder={{ color: 'gray.600' }}
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
