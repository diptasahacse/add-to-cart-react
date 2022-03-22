import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({listener}) => {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(products => setProducts(products))
    },[products]);
    
    
    return (
        <div>
            <h1>All Products</h1>
            <div className='all-products'>
                {
                    products.map(product => <Product listener={listener} key={product.id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;