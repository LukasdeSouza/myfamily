import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/signin' element={<SignInPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
