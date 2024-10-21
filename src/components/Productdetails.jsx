import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Product from './Product'
import { items } from './Data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productdetail = ({ cart, setcart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedproducts, setrelatedproducts] = useState([])

  useEffect(() => {
    const filteredproduct = items.filter((product) => product.id == id)
    // console.log(filteredproduct);
    setProduct(filteredproduct[0])

    const relatedproducts = items.filter((pro) => pro.category === product.category)
    setrelatedproducts(relatedproducts)


  }, [id, product.category])



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

        <div className="container">
          <div className="img">
            <img src={product.imgSrc} alt="" />
          </div>
          <div className='text-center'>
            <div className="card-body">
              <h1 className="card-title">{product.title}</h1><br />
              <h2 className="card-title">CATEGORY :{product.category}</h2><br />
              <p className="card-text">
                {product.description}
              </p>
              <button className="btn btn-primary ">
                {product.price}$</button>
                {user?.isLogin?( <button 
                 onClick={()=>addtocart(Product.id,Product.title,Product.description,Product.price,Product.imgSrc)}
                    className="btn btn-warning mx-3">
                      ADD to Cart</button> ):(<Link to={"/signin"}  className="btn btn-warning mx-3">Add to Cart</Link>)}

            </div>
          </div>
        </div>
        <h1 className=' text-center'>Related Products</h1>
        <Product cart={cart} setcart={setcart} items={relatedproducts} />
      </>
    )
  }


export default Productdetail