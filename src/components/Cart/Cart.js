import React, { useState } from 'react';
import './Cart.css'

const Cart = ({count}) => {
    
    return (
        <div className='cart-section'>
            <h2>Cart Details</h2>
            <strong>Cart <sup>{count.length}</sup> </strong>
            <div className={count.length > 0 ? "cart-details":""}>
                {
                    count.map((element,index) => <MakeList key={index} element={element} index={index}></MakeList>)
                    
                }

            </div>
            
        </div>
    );
};

const MakeList = ({element,index})=>{
    const {title,price} = element
    return(
        <div className='single-item'>
            <div className='item-index'>
                <span>{index+1}</span>
                <h4>{title}</h4>
            </div>
            <span>${price}</span>
        </div>
        
    );

}

export default Cart;