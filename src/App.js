import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Authentication status changed:", authenticate);
  }, [authenticate]);

  const handleLogout = () => {
    setAuthenticate(false);
    navigate('/login'); 
  };

  return (
    <div>
      <Navbar isLogin={authenticate} setIsLogin={setAuthenticate} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path='/detail/:id' element={<PrivateRoute authenticate={authenticate} component={<DetailPage />} />} />
      </Routes>
    </div>
  );
}

export default App;
