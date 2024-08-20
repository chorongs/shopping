import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1-1. navbar 생성
// 2. 전제 상품 페이지에서는 전체 상품을 볼 수 있다. (메인 페이지) 
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 되어있지 않으면 로그인 페이지로 이동 시킴
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭시 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보여야하고, 로그아웃을 하면 로그인이 보여야 한다.
// 9. 상품을 검색할 수 있다.

function App() {

  const [authenticate,setAuthenticate] = useState(false) // true 로그인 O , false 로그인 X
  useEffect (() => {
    console.log("aaa", true)}, [authenticate] )
  

  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
        <Route path='/detail/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
