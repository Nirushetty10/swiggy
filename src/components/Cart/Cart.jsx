import React, { Component } from 'react';
import "./Cart.scss";
import CartItem from './CartItem';

export default class Cart extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className='cart-box'>
         {this.props.data.map(item => <CartItem key={item.id} data={item} />)}
      </div>
    )
  }
}
