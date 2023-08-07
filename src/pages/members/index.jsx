import React from 'react'
import { mockMembers } from '../../utils/mocks'
import RootLayout from '../../components/layout/rootlayout'
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const MembersPage = () => {
  return (
    <RootLayout>
      <Stack direction='row' justify={'center'}>
        <Wrap spacing={3}>
          {mockMembers.map((member) => (
            <WrapItem>
              <Card maxW='xs' padding={3}>
                <CardHeader paddingBottom={0}>
                  <Text fontWeight='bold'>{member.name}</Text>
                </CardHeader>
                <CardBody>
                  <Box background={'gray.100'} borderRadius='lg'>
                    <Image
                      src={member.img}
                      height={100}
                      width={'100%'}
                      alt='My Family, foto membro da família'
                    />
                  </Box>
                  <Stack mt='6' spacing='3'>
                    <Text fontSize='small'>
                      {member.description}
                    </Text>
                    <Text color='green.500' fontSize='x-small' fontWeight='bold'>
                      {member.type}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider color='gray.300' />
                <CardFooter padding={3}>
                  <ButtonGroup spacing='1'>
                    <Button
                      variant='solid'
                      colorScheme='green'
                      fontSize='sm'
                      fontWeight='light'
                      leftIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      variant='ghost'
                      colorScheme='red'
                      fontSize='sm'
                      fontWeight='light'
                      leftIcon={<DeleteIcon />}
                    >
                      Remover
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </RootLayout>
  )
}

export default MembersPage