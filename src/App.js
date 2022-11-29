import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Home from './components/home';
import User from './components/userInfo';
import ShoppingCart from './components/shoppingCart';
import Footer from './components/footer/footer';
import RegForm from './components/regform';
import Rules from './components/rules';
import Account from './components/account';
import Booking from './components/booking';
import MyOrders from './components/myorders';
import axios from 'axios';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee,faEnvelope,faPhone,faClock ,faUser,faCartShopping,faStore,faScrewdriverWrench,faCircleInfo,faBars,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faSquareInstagram,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {ToastContainer} from "react-toastify";
import Category from './components/category';

library.add(faCheckSquare, faCoffee,faEnvelope,faPhone,faClock,faUser,faCartShopping,faStore,faScrewdriverWrench,faCircleInfo,faFacebook,faSquareInstagram,faYoutube,faTwitter,faBars,faCaretDown)



function App() {
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/userinfo" element={<User/>}></Route>
      <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
      <Route path="/regform" element={<RegForm/>}></Route>
      <Route path="/rules" element={<Rules/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      <Route path="/category"element={<Category/>}></Route>
      <Route path="/myorders" element={<MyOrders/>}></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
