import React from 'react'
import { mockMembers } from '../../utils/mocks'
import RootLayout from '../../components/layout/rootlayout'
import { Avatar, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'

const MembersPage = () => {
  return (
    <RootLayout>
      <Stack direction='row' justify='center' wrap='wrap'>
        {mockMembers.map((member) => (
          <Card maxW='xs' padding={3}>
            <CardBody>
              {/* <Avatar bg={'gray.200'} /> */}
              <Image
                src={member.img}
                height={120}
                alt='My Family, foto membro da família'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Text fontWeight='bold'>{member.name}</Text>
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