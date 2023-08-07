import React from 'react'
import { mockMembers } from '../../utils/mocks'
import RootLayout from '../../components/layout/rootlayout'
import { Avatar, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Stack, Text } from '@chakra-ui/react'

const MembersPage = () => {
  return (
    <RootLayout>
      <Stack>
        {mockMembers.map((member) => (
          <Card maxW='xs'>
            <CardBody>
              <Avatar bg={'gray.200'} />
              {/* <Image
    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  /> */}
              <Stack mt='6' spacing='3'>
                <Text fontWeight='bold'>{member.name}</Text>
                <Text fontSize='small'>
                  {member.description}
                </Text>
                <Text color='green.500' fontSize='sm' fontWeight='bold'>
                  {member.type}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green' fontSize='sm' fontWeight='light'>
                  Editar
                </Button>
                <Button variant='ghost' colorScheme='red' fontSize='sm' fontWeight='light'>
                  Remover
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </RootLayout>
  )
}

export default MembersPage