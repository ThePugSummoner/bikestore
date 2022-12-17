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
import { faCheckSquare, faCoffee,faEnvelope,faPhone,faClock ,faUser,faCartShopping,faStore,faScrewdriverWrench,faCircleInfo,faBars,faCaretDown, faX, faTrashCan,faBasketShopping,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faSquareInstagram,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {ToastContainer} from "react-toastify";
import Category from './components/categoryPage/category';
import AdminOrders from './components/adminOrders';
import AdminCategories from './components/adminCategories';
import AdminItems from './components/adminItems';
import Dbmanagement from './components/dbmanagement'
import Product from './components/product';
import SubCategory from './components/subCategory';
import SearchPage from './components/searchPage';

library.add(faCheckSquare, faCoffee,faEnvelope,faPhone,faClock,faUser,faCartShopping,faStore,faScrewdriverWrench,faCircleInfo,faFacebook,faSquareInstagram,faYoutube,faTwitter,faBars,faCaretDown, faX, faTrashCan,faBasketShopping,faAngleRight)



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
      <Route path="/category/:id"element={<Category/>}></Route>
      <Route path="/category/:id/:subCategoryId" element={<SubCategory/>}></Route>
      <Route path="/product/:productId" element={<Product/>}></Route>
      <Route path="/search/:searchTag" element={<SearchPage/>}></Route>
      <Route path="/myorders" element={<MyOrders/>}></Route>
      <Route path="/adminOrders" element={<AdminOrders/>}></Route>
      <Route path="/adminItems" element={<AdminItems/>}></Route>
      <Route path="/adminCategories" element={<AdminCategories/>}></Route>
      <Route path='/dbmanagement' element={<Dbmanagement/>}></Route>
     </Routes>
    <Footer/>
    </>

  );
}

export default App;
