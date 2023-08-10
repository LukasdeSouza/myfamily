import React from 'react'
import CustomDrawer from '../../drawer'
import { Toaster } from 'react-hot-toast'

const RootLayout = ({ children }) => {
  return (
    <div>
      <CustomDrawer />
      {children}
      <Toaster
        position='top-center'
      />
    </div>
  )
}

export default RootLayout