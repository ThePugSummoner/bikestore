import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import Home from './components/home';
import User from './components/userInfo';
import ShoppingCart from './components/shoppingCart';
import Footer from './components/footer';
import RegForm from './components/regform';
import axios from 'axios';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/userinfo" element={<User/>}></Route>
      <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
      <Route path="/regform" element={<RegForm/>}></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
