import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'




function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App
