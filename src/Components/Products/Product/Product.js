import React from 'react';


import classes from './Product.module.css';

const Product =(props)=>{
    return <div className={classes.product}>
                <div>
                    <a href='#'>
                       <img src={props.image}></img>
                    </a>
                </div>
                <div className={classes.productDetails}>
                <h2>Model:{props.title}</h2>
                <h4>Made by: <span >{props.company}</span></h4>
                <h4>
                     <strong> Price : <span>$</span>{props.price}</strong>
                </h4>
                </div>
                {/* <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img> */}
            </div>
          
}

export default Product;

