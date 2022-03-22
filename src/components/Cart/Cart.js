import React, { useState } from 'react';
import './Cart.css'

const Cart = ({count}) => {

    
    return (
        <div className='cart-section'>
            <h2>Cart Details</h2>
            <strong>Cart <sup>{count.length}</sup> </strong>
            <h2 className='total-price'>${calculate(count)}</h2>
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

const calculate = (count) =>{
    let totalPrice = 0;
    if(count){
        for (const iterator of count) {
            totalPrice+=iterator.price;
        }
        return totalPrice
    }

}

export default Cart;