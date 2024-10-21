import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { items } from './Data'
import Product from './Product'

const Searchitem = ({cart,setcart}) => {
  const { term } = useParams()
  const [filterdata, setFilterdata] = useState([])
  useEffect(() => {
    const filtereddata = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      console.log(data);
      setFilterdata(data)
    }
    filtereddata()
  }, [term])

  return (

    <Product cart={cart} setcart={setcart} items={filterdata} />
  )
}

export default Searchitem