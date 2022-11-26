import React from 'react';
import Products from '../Products/Products.js';
import classes from './MainBody.module.css';


const MainBody=()=>{
    return (
        <div>
            <h1>Our Products</h1>
        
            <Products  ></Products>
        </div>
    )
}
export default MainBody;