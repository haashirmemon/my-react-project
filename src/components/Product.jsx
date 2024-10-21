

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './addproduct';
import { UserContext } from './context/usercontext';



const Product = ({ items, cart, setcart }) => {
  const { user } = useContext(UserContext)
  console.log(user);

  const addtocart = (id, title, description, price, imgSrc) => {
    const obj = {
      id, title, description, price, imgSrc
    }
    setcart([...cart, obj])
    console.log("cart element", cart);

    toast.success('Your item is Added', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className="container my-5">
        <div className="row">
          {
            items.map((Product) => {
              return <>
                <div style={{ textDecoration: "none", display: "flex", justifyContent: 'center', alignItems: "center" }} className="col-lg-4 col-md-6 my-4 " key={Product.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/products/${Product.id}`} style={{
                      display: "flex", justifyContent: "center", alignItems: "center",
                    }}>
                      <img className="card-img-top" src={Product.imgSrc} alt="Card image cap" /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{Product.title}</h5><br />
                      <h6 className="card-title">CATEGORY :{Product.category}</h6><br />
                      <p className="card-text">
                        {Product.description}
                      </p>
                      <button className="btn btn-primary ">
                        {Product.price}$</button>
                      {user?.isLogin ? (<button
                        onClick={() => addtocart(Product.id, Product.title, Product.description, Product.price, Product.imgSrc)}
                        className="btn btn-warning mx-3">
                        ADD to Cart</button>) : (<Link to={"/signin"} className="btn btn-warning mx-3">Add to Cart</Link>)}


                    </div>

                  </div></div></>


            })
          }

        </div></div></>)
}




export default Product