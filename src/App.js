import React,{Component} from 'react';
import Header from './Header';
import DisplayProduct from './displayproduct';
import ProductList from './productlist';
import Cartdisplay from './cartDisplay';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      counts:0,
      sumTotal:0,
      cart:[]
    }
  };
  createProduct=(item)=>{
  return(
    <DisplayProduct
    key={item.id}
    name={item.name}
    imageUrl={item.imageUrl}
    price={item.price}
    clicks={this.handleclick}
    />
    )
  };
   handleclick =(item)=>{this.setState(function(state) {
  return {
        counts: state.counts+1,
        cart:[state.cart,item]
      };
    })
};


  render(){
    return(
            <div>
                  <Header />
                  <Cartdisplay
                      counts={this.state.counts}
                      product={this.state.cart}
                      sumTotal={this.state.sumTotal}
                    />
            <div>
                {this.state.cart.map(p=>{
                  return(
                   <Cartdisplay
                      key={p.id}
                      imageUrl={p.imageUrl}
                      name={p.name}
                      price={p.price}
                  />
        )}
      )
    }
            </div>
                  {ProductList.map(this.createProduct)}
            </div>
  )
  }
  }

export default App;
