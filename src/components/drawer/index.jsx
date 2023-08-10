import { Avatar, AvatarBadge, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { ArrowRightIcon, AttachmentIcon, BellIcon, ChatIcon, ChevronDownIcon, LinkIcon, SmallAddIcon, } from '@chakra-ui/icons'
import React from 'react'
import CustomAvatar from '../avatar'
import { useNavigate } from 'react-router-dom'

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const FAMILY_NAME = 'ABC'

  return (
    <>
      <Stack
        width={'100%'}
        px={3}
        py={2}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'gray.100'}>
        <IconButton
          icon={<ArrowRightIcon color={'green.300'} />}
          onClick={onOpen}
        />
        <Text
          fontSize={'md'}
          fontWeight={600}
          color={'green.400'}
        >
          My Family App
        </Text>
        <HStack>
          <CustomAvatar />
          <Menu>
            <MenuButton
              as={IconButton}
              size={'xs'}
              height={3}
              rightIcon={<ChevronDownIcon />}
            />
            <MenuList>
              <MenuItem
                fontWeight={300}
                fontSize={'sm'}
                onClick={() => navigate('/perfil')}
              >
                Perfil
              </MenuItem>
              <MenuItem
                fontWeight={300}
                fontSize={'sm'}>
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

      </Stack>
      <Drawer
        placement='left'
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            Família {FAMILY_NAME}
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              <HStack spacing={2}>
                <IconButton
                  onClick={() => navigate('/membros')}
                  icon={<LinkIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Membros</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
                  onClick={() => navigate('/renda')}
                  icon={<SmallAddIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Renda</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
                  onClick={() => navigate('/chat')}
                  icon={<ChatIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Chat</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
                  onClick={() => navigate('/fotos')}
                  icon={<AttachmentIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Fotos</Text>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CustomDrawer