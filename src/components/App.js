import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import { products } from '../actions';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { deleteProduct, addproduct, editProduct, addToCart, deleteFromCart, cartProducts } from '../actions';
import AddProduct from './AddProduct';
import Sort from './Sort';

toast.configure();
class App extends React.Component{
  constructor(){
    super();
    this.state={
      display:false,
      sort:false,
      cart:false,
      items:[],
      count:0,
    }
  }
  componentDidMount(){
    this.notify("Welcome To eCommerce!")
    axios.get("http://localhost:3500/data")
      .then((response) => {
        this.props.dispatch(products(response.data));
      })
      .catch(err => {
        console.log("error",err);
      })

      axios.get("http://localhost:3500/cart")
        .then((response => {
          console.log("cart response",response);
          this.props.dispatch(cartProducts(response.data))
        }))
        .catch(err => {
          console.log("error from cart",err);
        })

  }

  handleDelete = (Id, id) => {
    console.log("delete",id);
    this.props.dispatch(deleteProduct(Id, id));
    this.notify("Product Deleted Successfully!")
  }

  handleProductsCount = () => {
    const count = this.props.cart.length;
    return count;
  }

  handleAddProduct = (title, price, rating, description) => {
    const id = this.props.products.length + 1;
    this.props.dispatch(addproduct(id, title, price, rating, description))
    this.handleDisplay(false);
    this.notify("Product Added Successfully!");
  }

  handleDisplay = (ans) => {
    this.setState({
      display:ans,
      cart:false,
    })
  }

  notify = (message) => {
    toast.info(message,{autoClose:3000});
  }

  handleSort = (val) => {
    const { products } = this.props;
    const sortedByPrice = [...products].sort((prod1, prod2) => {
      return prod1.Price - prod2.Price;
    });
    this.setState({
      sort:val,
      items:sortedByPrice,
    })
    if(!this.state.sort){
      this.notify("Sorted Products");
    }
  }

  handleSave = (id,product) => {
    this.props.dispatch(editProduct(id,product));
  }

  handleAddToCart = (product) => {
    this.setState({
      count: this.state.count + 1,
    })
    this.props.dispatch(addToCart(product));
  }

  handleCart = () => {
    this.setState({
      cart:true,
    })
  }

  handleDeleteCartProduct = (id) => {
    this.setState({
      count:this.state.count - 1,
    })
    this.props.dispatch(deleteFromCart(id));
  }
  

  render(){
    const { products, cart } = this.props;
    const { sort, display } = this.state;
    console.log("cart number",this.handleProductsCount());
    const productDisplay = this.state.sort ? this.state.items : this.state.cart ? cart : products;
    return (
      <div className="App">
        <Navbar 
          count={this.handleProductsCount() }
          handleDisplay={this.handleDisplay} 
          handleCart={this.handleCart}
        />
        <Sort  
          sort={sort}
          display={display}
          handleSort={this.handleSort}
        />
        {
          productDisplay.length === 0 ? <h2 style={{marginLeft:"100px", marginTop:"30px"}}>No Product is Available!</h2> :
          !this.state.display && productDisplay.map((product,index) => (
            <ProductItem 
             key={index}
             Id={product.Id}
             id={product.id}
             Poster={product.Poster}
             Title={product.Title}
             Price={product.Price}
             Rating={product.Rating}
             Description={product.Description}
             handleDelete={this.handleDelete}
             handleSave={this.handleSave}
             handleAddToCart={this.handleAddToCart}
             handleCart={this.handleCart}
             cart={this.state.cart}
             handleDeleteCartProduct={this.handleDeleteCartProduct}
            />
          ))
        }
        {
          this.state.display && <AddProduct 
          handleAddProduct={this.handleAddProduct}
        />
        }
        
      </div>
    );
  }
  
}

function mapStateToProps(state){
  return {
    products:state.products,
    cart:state.cart,
  }
}

export default connect(mapStateToProps)(App);
