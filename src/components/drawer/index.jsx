import { Avatar, AvatarBadge, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { ArrowRightIcon, AttachmentIcon, ChatIcon, ChevronDownIcon, LinkIcon, SmallAddIcon, } from '@chakra-ui/icons'
import React from 'react'
import CustomAvatar from '../avatar'

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
              size={'sm'}
              height={3}
              rightIcon={<ChevronDownIcon />}
            />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
                  icon={<LinkIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Membros</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
                  icon={<SmallAddIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Renda</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
                  icon={<ChatIcon color={'green.300'} />}
                />
                <Text fontSize={'md'}>Chat</Text>
              </HStack>
              <HStack spacing={2}>
                <IconButton
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