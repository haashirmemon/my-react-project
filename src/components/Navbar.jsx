import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { useEffect } from 'react'


import { FaCartShopping } from "react-icons/fa6";

import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { UserContext } from './context/usercontext';
import { Avatar } from 'antd';




const Navbar = ({ setData, cart }) => {
  const { user } = useContext(UserContext);
  console.log("user->", user)
  const [searchterm, setsearchterm] = useState("")
  const location = useLocation()

  const goToHomePage = () => navigate("/");
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const navigate = useNavigate()

  const filterbycategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element)
  };
  const filterbyprice = (price) => {
    const Element = items.filter((product) => product.price >= price)
    console.log(filterbyprice);

    setData(Element)
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`)
  }

  return (
    <header className='sticky-top'>
      <div className="nav-bar">
        <Link to={"/"} className="brand">Ecommerce App</Link>
        <form
          onSubmit={handlesubmit} className="search-bar"
        >
          <input
            type="text"
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
            placeholder='search products'
          />
        </form>

        {user?.isLogin ? (
          <div className="loginclass">
            
           
            <h6 className="text-xl my-4">{user.email}</h6>
            <button onClick={handleSignOut} className='btn btn-warning' >signOut</button>
            <Link className='btn btn-warning' to={"/addproduct"}>Add product</Link>

          </div>
        ) : (
          <button className="btn btn-warning position-relative mx-2"> <Link to="/signin" className="mx-2 my-2 text-black hover:text-black">
            Login
          </Link></button>
        )

        }

        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative mx-2">
            Add to cart <FaCartShopping className='mx-2' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>

          </button>
        </Link>
      </div>
      {
        location.pathname == "/" && (
          <div className="navbar-wrapper">
            <div className="items">Filter by {"-->"}</div>
            <div className="items" onClick={() => setData(items)}>No filter</div>
            <div className="items" onClick={() => filterbycategory("mobiles")}>Mobiles</div>
            <div className="items" onClick={() => filterbycategory("laptops")}>Laptops</div>
            <div className="items" onClick={() => filterbycategory("tablets")}>Tablets</div>
            <div className="items" onClick={() => filterbyprice(299)}>{">="}299$</div>
            <div className="items" onClick={() => filterbyprice(499)}>{">="}499$</div>
            <div className="items" onClick={() => filterbyprice(699)}>{">="}699$</div>
            <div className="items" onClick={() => filterbyprice(899)}>{">="}899$</div>
          </div>
        )
      }


    </header>
  )
}

export default Navbar
