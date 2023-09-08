import '@fontsource/poppins'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import HomePage from './pages/home';
import MembersPage from './pages/members';
import IncomePage from './pages/income';
import ChatPage from './pages/chat';
import PhotosPage from './pages/photos';
import LandingPage from './pages/landingpage';
import Page404 from './pages/404';
import ProfilePage from './pages/profile';
import ForgotPasswordPage from './pages/forgotPassword';
import NewPasswordPage from './pages/newPassword';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Box, Stack } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';



function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  //   return () => subscription.unsubscribe()

  // }, [])


  return (
    // <>
    //   {!session ?
    //     <Stack margin={'0 auto'} width={'80'} mt={8}>
    //       <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    //     </Stack> :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/signin' element={<SignInPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
        <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/auth/new-password' element={<NewPasswordPage />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/membros' element={<MembersPage />} />
        <Route path='/renda' element={<IncomePage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/fotos' element={<PhotosPage />} />

        <Route path='/perfil' element={<ProfilePage />} />

        <Route path='*' element={<Page404 />} />

      </Routes>
      <Toaster
        toastOptions={{
          duration: 2500
        }}
      />
    </BrowserRouter>
    // }
    // </>
  );
}

export default App;
