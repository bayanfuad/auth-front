import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Login';
import AuthProvider from './contexs/AuthProvider';
import RefreshProvider from './contexs/RefreshProvider';

function App() {
  return (
    <RefreshProvider>
    <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes >
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
  </RefreshProvider>
  
  );
}

export default App;
