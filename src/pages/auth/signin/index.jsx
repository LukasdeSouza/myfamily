import React, { useState } from 'react'
import SignInComponent from '../../../components/signin'
import { createClient } from '@supabase/supabase-js'
import { toast } from 'react-hot-toast'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL_API, process.env.REACT_APP_SUPABASE_PUBLIC_API_KEY)


const SignInPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)

  const onChangeEmail = (email) => {
    setEmail(email)
  }
  const onChangePassword = (password) => {
    setPassword(password)
  }

  const doLogin = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password })
    if (error) {
      toast.error("Erro ao efetuar Login. Tente Novamente")
    }
    setLoading(false)
  }

  return (
    <SignInComponent
      loading={loading}
      doLogin={doLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  )
}

export default SignInPage