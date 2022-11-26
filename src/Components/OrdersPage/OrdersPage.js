import React from 'react';
import classes from './OrdersPage.module.css';
import OrdersSummary from './OrdersSummary/OrdersSummary';
import Navbar from '../Navbar/Navbar.js';
import { storeProducts } from '../Products/AllProductsDetails/AllProductDetails';

const OrdersPage=()=>{
    return(

            <div className={classes.ordersPage}>
                <Navbar></Navbar>
                <div className={classes.background}></div>
                {/* I have given this to provide background color */}
                <div className={classes.headingBar}>
                  <h1>Order Confirmation</h1>
                  <p>Order Total <strong>$31346</strong></p>
                  <button>Place Order</button>
                </div>

                <div  className={classes.mainBody}>
                    
                    <div className={classes.div5}>
                        <h3>Order Details</h3>
                        {storeProducts.map((element)=>{
                            return (
                                <OrdersSummary title={element.title}
                                                img={element.img}
                                                company={element.company}
                                                price={element.price}></OrdersSummary>
                            )
                        })
                    }

                    </div>
                    
                    
                    <div  className={classes.div1}>
                        <h3>Your Information</h3>
                        <strong>Md Yasin Ansari</strong>
                        <p>yasinansari@gmail.com</p>
                    </div>

                    <div className={classes.div2}>
                        <h3>Shipping Address</h3>
                        <strong>Md Yasin Ansari</strong>
                        <p>14/2b anna purna Nagar Benachity durgapur-13</p>
                    </div>




                    <div className={classes.div3}>
                        <h4>Payment</h4>
                        <p>VISA</p>
                        <p>Your Card ending with 1234</p>
                    </div>


                    <div className={classes.div4}>
                        <h4>Billing Address</h4>
                        <strong>Md Yasin Ansari</strong>
                        <p>14/2b anna purna Nagar Benachity durgapur-13</p>
                        
                    </div>
                  

                    
                    
                </div>
                
                



            </div>
    )  

}

export default OrdersPage;