import { extendTheme } from '@chakra-ui/react'

const colors = {
  green: {
    verylight: '#d8ffcc',
    light: '#98e9d0',
    medium: '#72a5ae',
    dark: '#73738d',
    darker: '#8e3f65'
  },
  pink: {
    verylight: '#fdeecd',
    medium: '#ea8676',
    dark: '#fc3d73'
  }
}

const customerTheme = extendTheme({ colors })

export { customerTheme }