import React, { Component } from 'react';
import "./CartItem.scss";
import { Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default class CartItem extends Component {
  render() {
    const { id ,food_name, total, price , quantity , image} = this.props.data;
    console.log("Cart item",this.props.data);
    return (
      <div className='cart-item-box'>
        <div className="item-image">
            <img src={image} alt="" />
        </div>
        <div className='item-title'>{food_name}</div>
        <div className="quantity-selector">
            <Button variant="contained">
                <ChevronLeftIcon />
            </Button>
            <div className="item-quantiy">{quantity}</div>
            <Button variant="contained">
                <ChevronRightIcon />
            </Button>
        </div>
        <div className="item-quantity">{total}</div>
      </div>
    )
  }
}
