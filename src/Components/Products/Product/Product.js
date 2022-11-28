import React from 'react';


import classes from './Product.module.css';
import { Link } from 'react-router-dom';

const Product =(props)=>{
    return <div className={classes.product}>
                <div>
                    <Link to='/details'>
                       <img src={props.image} alt='yasin'></img>
                    </Link>
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

