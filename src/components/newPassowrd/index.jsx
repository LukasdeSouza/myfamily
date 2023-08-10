'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function NewPasswordComponent() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '2xl' }}>
          Digite uma Nova Senha
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel fontSize={12}>Email</FormLabel>
          <Input
            placeholder="hogwarts@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel fontSize={12}>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'green.400'}
            color={'white'}
            _hover={{
              bg: 'green.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}