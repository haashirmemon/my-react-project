import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home/home";

import UserLayout from "./components/userLayout";
import UserProfile from "./pages/users/profile";
import UserProducts from "./pages/users/products";
import Bid from "./pages/users/bids";
import Layout from "./components/layout";
import Signin from "./pages/auth/signin";

import AllProducts from "./pages/home/allproducts";
import AddProduct from "./pages/home/addproduct";
import ProductDetail from "./pages/home/productdetail"; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="products/:id" element={<ProductDetail />} /> {/* Use the imported component */}
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="products" element={<UserProducts />} />
          <Route path="bids" element={<Bid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

