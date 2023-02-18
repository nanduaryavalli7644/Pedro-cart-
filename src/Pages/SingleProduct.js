import React from 'react';
import "./SingleProduct.css"
import { useContext } from 'react';
import { appContext } from '../Components/Context/Context';
const SingleProduct = ({val})=>{
    const{image,productName,price} = val;
    const [basket,setBasket]=useContext(appContext);

    const addTocart =(obj)=>{
             if(basket.includes(obj)){
                obj.quantity = obj.quantity+1
                 setBasket([...basket]) 
            }
             else{
                 setBasket([...basket,obj])
             }
             
  
    }
    return(
           <div className='card-continer'>
               <img src={image} alt="photo" />
               <h2 className='product-name'>{productName}</h2>
               <p className='price'>{price}</p>
               <button className='add-To-Cart' onClick={()=>{addTocart(val)}}>Add to cart</button>
           </div>
    )

}

export default SingleProduct;