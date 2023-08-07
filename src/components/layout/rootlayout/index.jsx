import React from 'react'
import CustomDrawer from '../../drawer'
import { Stack } from '@chakra-ui/react'

const RootLayout = ({ children }) => {
  return (
    <div>
      <CustomDrawer />
      {children}
    </div>
  )
}

export default RootLayout