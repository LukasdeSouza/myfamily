import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function SignInComponent({ doLogin, onChangeEmail, onChangePassword, loading }) {
  const navigate = useNavigate()

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Entre com sua Conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            e curta nossa <b>plataforma</b> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => onChangeEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" onChange={(e) => onChangePassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Lembre-me</Checkbox>
                <Text color={'green.400'} cursor={'pointer'}
                  onClick={() => navigate('/auth/forgot-password')}>
                  Esqueceu sua senha?
                </Text>
              </Stack>
              <Button
                isLoading={loading}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
                onClick={doLogin}
              >
                Entrar
              </Button>
            </Stack>
            <Text align={'center'}>
              Não possui conta? <Link href='/auth/signin' color={'green.400'}>Me Cadastrar</Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}