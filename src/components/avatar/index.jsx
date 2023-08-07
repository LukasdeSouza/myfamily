import { LinkIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'

const CustomAvatar = () => {
  return (
    <Avatar
      size={'sm'}
      bgColor={'green.300'}
      icon={<LinkIcon />}
    >
      <AvatarBadge
        boxSize={'0.9em'}
        bg={'green.400'}
      />
    </Avatar>
  )
}

export default CustomAvatar