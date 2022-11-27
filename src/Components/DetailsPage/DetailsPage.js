import React ,{Component} from 'react';
import img1 from '../../img/product-1.png';
import classes from './DetailsPage.module.css';
import Navbar from '../Navbar/Navbar';
import Wrapper from '../../Hoc/Wrapping';

const DetailsPage =(props)=>{

  
    
    return (
        <Wrapper>
        <Navbar></Navbar>
        <div className={classes.Page2}>
            <h1>Google Pixel-Black</h1>
          <div  className={classes.testimonial}>
            <div className={classes.image_container}>
              <img src={img1} alt="Mobile" ></img>
            </div>
            <div className={classes.testimonial_info}>
              <h2 class="testimonial_name">Model:Google Pixel- Black</h2>
              <h3 class="testimonial_subtitle">MADE BY: GOOGLE</h3>
              <h3>Price : $10</h3>
              <h4>Some info About Product</h4>
              <p className={classes.testimonial_text}>Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics, DIY Coloring Book Mixtape Craft Beer Sartorial Hella Blue Bottle. Tote Bag Wolf Authentic Try-Hard Put A Bird On It Mumblecore. Unicorn Lumbersexual Master Cleanse Blog Hella VHS, Vaporware Sartorial Church-Key Cardigan Single-Origin Coffee Lo-Fi Organic Asymmetrical. Taxidermy Semiotics Celiac Stumptown Scenester Normcore, Ethical Helvetica Photo Booth Gentrify.
              </p>
              <button><strong > Back to Products</strong> </button>
              <button onClick={()=>{
                return props.add(1)
              }}><strong style={{color:'red'}}> Add To Cart</strong></button>

              <h2>Cart-Size:-{props.cart.length}</h2>
              <h3>Clone branch has been made</h3>
              <h4>htrrr</h4>
              <h5>sun and moon</h5>
//                jhugeufih
  
              
            </div>
          </div>
        </div>
        </Wrapper>

    )
    
  
}

export default DetailsPage;
