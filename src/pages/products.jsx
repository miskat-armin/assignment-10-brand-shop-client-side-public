import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/Card/productCard';

const Products = () => {
  const { state } = useLocation()
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + `/products/${state?.brand_name}`)
    .then(res => res.json())
    .then(data => setProducts(data))
    
  },[state.brand_name])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        products.length > 0 &&
        products.map((product, idx) => {
          return(
            <ProductCard key={idx} product={product}/>
          )
        })
      }
    </div>
  )
}

export default Products