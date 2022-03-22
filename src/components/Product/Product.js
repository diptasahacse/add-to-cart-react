import React from 'react';
import './Product.css'

const Product = ({product,addListener,removeListener}) => {
    const {title,image,description,price,id} = product;
    

    
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description.length > 150 ? description.slice(0,150)+" ...": description}</p>
            <p>${price}</p>
            <button onClick={()=> addListener(product)}>Add to Cart</button>
            <button onClick={()=> removeListener(id)}>Remove from Cart</button>
            
        </div>
    );
};

export default Product;