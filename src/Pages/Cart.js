import React from 'react'
import { GetContext,useState} from '../Components/Context/Context';
import './Cart.css'
const Cart = () => {
  const [basket,setBasket] = GetContext();
  // const [price,setPrice] = useState(0);
   const removeItem = (id)=>{
        const newArray = basket.filter((res)=>
        { return id !== res.id})
        setBasket(newArray)
      }
 
   const totalValue = basket.reduce((acc,curr)=>{
       return acc+curr.price*curr.quantity 
   },0)

      const updateQuantity = (id,num)=>{
         const arr= basket;  
        arr[id].quantity +=num;
        setBasket([...arr])
      }
  return (
    <div>
       {
         basket.map((val,id)=>{
          return <div className='cart-item'>
                    <div className='cartItem-img'>
                       <img src={val.image} alt="" />
                    </div>
                    <div className='cartItem-details'>
                       <h2>{val.productName}</h2>
                       <p>{val.price}</p>
                       <button onClick={()=>{updateQuantity(id,1)}}>+</button>   
                       <button className='num'>{val.quantity}</button>     
                       <button  onClick={()=>{updateQuantity(id,-1)}}>-</button>   
                    </div>
                    <div>
                      <button className='remove' onClick={()=>{removeItem(val.id)}}>Remove</button>
                    </div>
                </div>
         })
       }
        <p className='sub-total'>Sub total:{totalValue}</p>
    </div>
  )
}

export default Cart;