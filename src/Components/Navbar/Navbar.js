import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';

const navbar =()=>{
    return (
    <header className={classes.navbar}>
        <div>
           <Link to='/'> <strong>Flipkart</strong></Link>
        </div>
        <nav>
            <ul>
                <li><input type="text" name="Search for Products"></input></li>
                <li><button>Login</button></li>
                <li><a href="#" >Become a Seller</a></li>
                <li><a href="#" >More</a></li>
                <li><Link to="/orderspage">Cart</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default navbar;