import React, { useState } from 'react'
import { mockMembers } from '../../utils/mocks'
import RootLayout from '../../components/layout/rootlayout'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, VStack, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, AddIcon } from '@chakra-ui/icons'
import { toast } from 'react-hot-toast'

const MembersPage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [members, setMembers] = useState([...mockMembers])
  const [member, setMember] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const onClickEdit = (member) => {
    console.log(member)
  }

  const handleOpen = (member) => {
    setMember(member)
    setIsOpen(true)
  }

  const handleOpenEditModal = () => {
    setOpenEditModal(true)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const onClickDelete = (idToRemove) => {
    setMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      const membersToRemove = newMembers.findIndex((members) => members.id === idToRemove);

      newMembers.splice(membersToRemove, 1);
      return newMembers;
    });
    onCloseModal()
    toast.success('Membro Removido com Sucesso!')
  };

  const handleConfirmDelete = () => {
    setConfirmDelete(true)

    setTimeout(() => {
      setConfirmDelete(false)
    }, [1500])
  }


  return (
    <RootLayout>
      <Text
        fontSize={'2xl'}
        color={'green.500'}
        padding={4}
        fontWeight={600}
        textAlign={'center'}
      >
        Hall da familia
      </Text>
      <Stack direction='row' justify={'center'}>
        <Wrap spacing={3}>
          {members.length > 0 ?
            members.map((member) => (
              <WrapItem key={member.id}>
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
                        // onClick={onOpen}
                        onClick={() => handleOpen(member)}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant='ghost'
                        colorScheme='red'
                        fontSize='sm'
                        fontWeight='light'
                        leftIcon={<DeleteIcon />}
                        onClick={() => onClickDelete(member.id)}
                      >
                        Remover
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </WrapItem>
            ))
            :
            <Card>
              <CardBody>
                <HStack>
                  <Text>Cadastrar Membro</Text>
                  <IconButton onClick={handleOpenEditModal}>
                    <AddIcon />
                  </IconButton>
                </HStack>
              </CardBody>
            </Card>
            // <Text fontSize='small' color='gray.400'>
            //   Nenhum membro cadastrado.
            // </Text>
          }
        </Wrap>
      </Stack>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='md'>{member?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={1}>
              <Text fontSize='sm'>{member?.description}</Text>
              <Text fontSize='smaller'>{member?.dateOfBirth}</Text>
              <Text fontSize='smaller'>{member?.profession}</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {
              confirmDelete ?
                <Button
                  colorScheme='red'
                  mr={3}
                  fontSize='sm'
                  fontWeight='300'
                  bgColor='red.400'
                  onClick={() => onClickDelete(member.id)}
                >
                  Confirmar Remoção ?
                </Button>
                :
                <Button
                  colorScheme='red'
                  mr={3}
                  fontSize='sm'
                  fontWeight='300'
                  bgColor='red.400'
                  onClick={() => handleConfirmDelete()}
                >
                  Remover
                </Button>
            }
            <Button
              variant='ghost'
              fontSize='sm'
              fontWeight='300'
              onClick={onCloseModal}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={openEditModal} onClose={onCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='md'>Novo Membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2}>
              <Input placeholder='Nome' />
              <Input placeholder='Descrição' />
              <Select placeholder='Tipo'>
                <option value={'Pai'}>Pai</option>
                <option value={'Mãe'}>Mãe</option>
                <option value={'Filho'}>Filho</option>
                <option value={'Filha'}>Filha</option>
                <option value={'Outro'}>Outro</option>
              </Select>
              <input type='date' style={{ width: '98%' }} />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='red'
              mr={3}
              fontSize='sm'
              fontWeight='300'
              bgColor='red.400'
              onClick={() => handleConfirmDelete()}
            >
              Remover
            </Button>
            <Button
              variant='ghost'
              fontSize='sm'
              fontWeight='300'
              onClick={onCloseModal}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </RootLayout>
  )
}

export default MembersPage