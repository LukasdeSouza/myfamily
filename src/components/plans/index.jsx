'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'


function PriceWrapper(props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function PricingComponent() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Planos que se encaixam com a realidade da sua família
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          O combinado não sai caro.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="md">
              Básico
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="2xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="4xl" fontWeight="900">
                0
              </Text>
              <Text fontSize="2xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Chat Ilimitado
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Controle Financeiro.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1GB para Imagens
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="outline">
                Começar Agora
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('green.300', 'green.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Mais Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="md">
                Intermediário
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="2xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="4xl" fontWeight="900">
                  20
                </Text>
                <Text fontSize="2xl" color="gray.500">
                  /mês
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Chat Ilimitado
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Controle Financeiro
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  2GB de Imagens
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Cadastro e Controle de Membros
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="green">
                  Começar Agora
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="md">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="2xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="4xl" fontWeight="900">
                50
              </Text>
              <Text fontSize="2xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Chat Ilimitado
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Detalhamento Financeiro
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5GB para Imagens
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="outline">
                Começar Agora
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}