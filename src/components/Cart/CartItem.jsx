import React, { Component } from 'react';
import "./CartItem.scss";
import { Button } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
export default class CartItem extends Component {
  render() {
    const { id ,food_name, total , quantity , image} = this.props.data;
    
    const handleDecreaseQuantity = () => {
      this.props.decreaseQuantity(id);
    }
    const handleIncreaseQuantity = () => {
      this.props.increaseQuantity(id);
    }
    return (
      <div className='cart-item-box'>
        <div className="item-image">
            <img src={image} alt="" />
        </div>
        <div className='item-title'>{food_name}</div>
        <div className="quantity-selector">
            <Button variant="contained" onClick={handleDecreaseQuantity}>
                <RemoveIcon />
            </Button>
            <div className="item-quantiy">{quantity}</div>
            <Button variant="contained" onClick={handleIncreaseQuantity}>
                <AddIcon />
            </Button>
        </div>
        <div className="item-quantity">{total}</div>
      </div>
    )
  }
}
