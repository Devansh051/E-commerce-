import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

function Breadcrum({ product }) {
    if (!product) {
    return <div className='breadcrum'>Loading product info...</div>;
  }

  return (
    <div className='breadcrum'>
      <Link to="/">HOME</Link>
      <img src={arrow_icon} alt='arrow' />
      <Link to="/">SHOP</Link>
      <img src={arrow_icon} alt='arrow' />

      <Link to={`/${product.category.toLowerCase()}`}>
        {product.category.toUpperCase()}
      </Link>
      <img src={arrow_icon} alt='arrow' />

      <Link to={`/product/${product.id}`}>
        {product.name.toUpperCase()}
      </Link>
    </div>
  )
}

export default Breadcrum
  