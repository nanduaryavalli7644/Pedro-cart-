import React, { useEffect,useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { GetContext } from './Context/Context'

const Header = () => {
  const [basket,setBasket] = GetContext();

  const [cartQuan,setCartQuan] = useState(0);
 useEffect(()=>{
  const quan = basket.reduce((acc,curr)=>{
    return acc+curr.quantity
 },0)
 setCartQuan(quan)
 },[basket]) 

   

  return (
    <div className='header'>
        <h1> <Link to="/">Shopping Cart </Link></h1>
        <div className='links'>
             {/* <h1><Link to="/shop">Shop</Link></h1> */}
            <h1><Link to="/cart">Cart {cartQuan}</Link></h1>
        </div>
    </div>
  )
}

export default Header;