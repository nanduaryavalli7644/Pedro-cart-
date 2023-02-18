import React, { useEffect, useState } from 'react'
import { appContext, GetContext } from '../Components/Context/Context';
import SingleProduct from './SingleProduct';
import { PRODUCTS } from '../Data';
import './Shop.css'
        

const Shop = () => {
  const [basket,setBasket]=GetContext();
  const [products,setProducts]=useState(PRODUCTS);
 
  
        const sortArr = (prod)=>{

        let newArr = prod.sort((a,b)=>{
               if(a.price>b.price){
                 return 1 
               }
               else{
                return -1
               }
              
              }
        )
       setProducts([...newArr])
       }
                
       const sortDec = (prod)=>{

        let newArr = prod.sort((a,b)=>{
               if(a.price>b.price){
                 return -1 
               }
               else{
                return 1
               }
              
              }
        )
       setProducts([...newArr])
       }

  return (
    <div>
        <div className='products-container'>
        <select>
             <option value="">sort</option>
             <option value="price:low to high" onClick={()=>{sortArr(products)}}>price:low to high</option>
             <option value="price:high to low" onClick={()=>{sortDec(products)}} >price:high to low</option>
          </select>
             <div className='products-section'>
              
                 {
                   products.map((val)=>{
                      return <SingleProduct val={val}/>
                   }) }
             </div>
        </div>
    </div>
  )
}

export default Shop;