import React from 'react';
import classes from './OrdersSummary.module.css';
const OrdersSummary =(props)=>{
    return (
        <div className={classes.ordersSummary}>

            <div  className={classes.div1}>
                 <img src={props.img} alt='image'></img>
            </div>

            <div  className={classes.div2}>

            <p>Title:- {props.title}</p>
            <p>Company:- {props.company}</p>
            <p>Price:- {props.price}</p>

            </div>


        </div>
    )
}
export default OrdersSummary;