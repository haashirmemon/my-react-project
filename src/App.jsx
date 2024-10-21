import Navbar from './components/navbar';
import React from 'react'
import Product from './components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productdetail from './components/Productdetails';
import Cart from './components/Cart';
import { items } from './components/Data';
import { useState } from 'react';
import Searchitem from './components/Searchitem';
import Signinform from './auth/login';
import Signupform from './auth/signup';
import AddProduct from './components/addproduct';


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <BrowserRouter>
      <Navbar cart={cart} setData={setData} />
     
        <Routes>
       
         <Route path='/' element={<Product items={data} cart={cart} setcart={setCart}/>}/>
         <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
         <Route path='/search/:term' element={<Searchitem cart={cart} setcart={setCart}/>}/>

         <Route path='/products/:id' element={<Productdetail cart={cart} setcart={setCart} />}/>
         <Route path="/signin" element={<Signinform/>} />
         <Route path="/signin/signup" element={<Signupform/>} />
         <Route path="/addproduct" element={<AddProduct/>} />
          </Routes>
          
          </BrowserRouter>

    </>

  )
}

export default App
