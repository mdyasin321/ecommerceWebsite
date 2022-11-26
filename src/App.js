import React , {Component} from 'react';
import Page1 from './Components/Page1/Page1.js';

import DetailsPage from './Components/DetailsPage/DetailsPage.js';
import OrdersPage from './Components/OrdersPage/OrdersPage.js';
import {storeProducts} from './Components/Products/AllProductsDetails/AllProductDetails.js';

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
    return(
      // <Page1></Page1>
      <DetailsPage add={this.addToCart}
                    cart={this.state.cart}></DetailsPage>
      // <OrdersPage></OrdersPage>
  
    )
  }
}
export default App;
