import React from 'react'
import './Breadcrum.css'
import { Link } from 'react-router-dom'
import arrow_icon from '../Assests/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props;
    if (!product || !product.category || !product.name) {
        return <div>Loading breadcrumb...</div>;
    }

    const categoryPath = `/${product.category.toLowerCase()}`;

    return (
        <div className='breadcrum'>
            <Link to='/'>SHOP</Link> <img src={arrow_icon} alt='>' />
            <Link to={categoryPath}>{product.category.toUpperCase()}</Link> <img src={arrow_icon} alt='>' />
            {product.name}
        </div>
    );
}

export default Breadcrum
  
