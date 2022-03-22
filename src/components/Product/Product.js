import React from 'react';
import './Product.css'

const Product = ({product,listener}) => {
    const {title,image,description,price} = product;
    

    
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description.length > 150 ? description.slice(0,150)+" ...": description}</p>
            <p>${price}</p>
            <button onClick={()=> listener(product)}>Add to Cart</button>
            
        </div>
    );
};

export default Product;