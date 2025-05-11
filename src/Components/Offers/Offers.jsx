import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exlusive </h1>
        <h1>Offers For You </h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className='offers-right'>
        <img src={exclusive_image} alt="exclusive pic" />
      </div>
    </div>
  )
}

export default Offers
