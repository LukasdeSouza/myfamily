import React from 'react'
import CustomDrawer from '../../drawer'

const RootLayout = ({ children }) => {
  return (
    <div>
      <CustomDrawer />
      {children}
    </div>
  )
}

export default RootLayout