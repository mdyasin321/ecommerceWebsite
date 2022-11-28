import React , {Component} from 'react';
import Page1 from './Components/Page1/Page1.js';

import DetailsPage from './Components/DetailsPage/DetailsPage.js';
import OrdersPage from './Components/OrdersPage/OrdersPage.js';
import {storeProducts} from './Components/Products/AllProductsDetails/AllProductDetails.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component{

  state={
    cart:[]
  }

  addToCart =(id)=>{
    const newCart=[...this.state.cart];
    newCart.push(id);
    this.setState({
      cart:newCart
    })
  }

  render(){
    return (
     <Router>
       {/* <Page1/>  */}
       {/* <DetailsPage add={this.addToCart}
                    cart={this.state.cart}></DetailsPage> */}
            
       <Routes>
        <Route exact path='/' element={<Page1/>}></Route>
        <Route exact path='/orderspage' element={< OrdersPage />}></Route>
        <Route exact path='/details' element={< DetailsPage  add={this.addToCart} cart={this.state.cart} />}></Route> 
        <div>yasin ansari</div>
      
      </Routes>
    </Router>  
  
    )
  }

  // render(){
  //   return (
     
      
  //      <DetailsPage add={this.addToCart}
  //                   cart={this.state.cart}></DetailsPage>
        
     
    
  
  //   )
  // }



}
export default App;
