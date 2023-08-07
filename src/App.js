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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/signin' element={<SignInPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/membros' element={<MembersPage />} />
        <Route path='/renda' element={<IncomePage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/fotos' element={<PhotosPage />} />

        <Route path='*' element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
