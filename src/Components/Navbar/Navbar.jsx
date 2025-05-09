import React, { useContext, useState } from 'react'
import './Navbar.css'
import Logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

  //for the underline
  const[menu, setMenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext);

  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
            <img src={Logo} alt='Shopper'></img>
            <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}> <NavLink style={{textDecoration: 'none', color:'inherit'}} to='/'> Shop </NavLink>{menu === "shop" ? <hr/> : <></>} </li>
            <li onClick={() => {setMenu("men")}}><NavLink style={{textDecoration: 'none', color:'inherit'}} to='/men'> Men </NavLink>{menu === "men" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("women")}}><NavLink style={{textDecoration: 'none', color:'inherit'}} to='/women'> Women </NavLink>{menu === "women" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><NavLink style={{textDecoration: 'none', color:'inherit'}} to='/kids'> Kids </NavLink>{menu === "kids" ? <hr/> : <></>}</li>
        </ul>

        <div className='nav-login-cart'>
            <NavLink  style={{textDecoration: 'none', color:'inherit'}} to='/login'><button className='login-btn'>Login</button></NavLink>
            <NavLink style={{textDecoration: 'none', color:'inherit'}} to='/cart'><img src={cart_icon} alt='cart'></img></NavLink>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar
