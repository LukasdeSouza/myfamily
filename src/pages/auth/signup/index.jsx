import React from 'react'
import SignUpComponent from '../../../components/signup'

const SignUpPage = () => {
  const doSignUp = () => {
    console.log('Sign Up')
  }

  return (
    <SignUpComponent
      doSignUp={doSignUp}
    />
  )
}

export default SignUpPage