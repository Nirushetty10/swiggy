import React, { Component } from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import { Button } from "@material-ui/core";
import CustomizedSnackbars from "../SnackBar/SnackBar"

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    if(!this.props.total) {
      return;
    }
    this.setState({ open: true });
    this.props.handleOrder();
    this.props.handleNotification();
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="cart-box">
        <div className="cart-items">
          {this.props.data.length > 0 && this.props.data.map((item) => (
            <CartItem key={item.id} data={item} decreaseQuantity={this.props.decreaseQuantity} increaseQuantity={this.props.increaseQuantity}/>
          ))}
          {this.props.data.length === 0 && <div className="cart-empty">Your cart is empty!. You can go to home page to view more restaurants</div>}
        </div>
        <div className="cart-total"> 
          <div className="cart-desc">Bill details</div> 
          <div className="item-total"> 
            <h3>Item total</h3> 
            <h3>₹ {this.props.total}</h3> 
          </div> 
          <Button variant="contained" color="primary" className="cart-button" onClick={this.handleClick}>Proceed to Payment</Button>
          <CustomizedSnackbars handleClose={this.handleClose} open={this.state.open}/>
        </div>
      </div>
    );
  }
}

