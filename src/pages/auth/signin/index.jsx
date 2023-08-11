import React, { useState } from 'react'
import SignInComponent from '../../../components/signin'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL_API, process.env.REACT_APP_SUPABASE_PUBLIC_API_KEY)


const SignInPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onChangeEmail = (email) => {
    setEmail(email)
  }
  const onChangePassword = (password) => {
    setPassword(password)
  }

  const doLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password })
    console.log(data)
  }

  return (
    <SignInComponent
      doLogin={doLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  )
}

export default SignInPage