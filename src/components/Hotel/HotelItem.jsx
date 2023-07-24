import React, { Component } from "react";
import "./HotelItem.scss";
import { Button } from "@material-ui/core";
import TransitionsModal from "../Modal/Modal";

export default class HotelItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isItemPopupShow: false,
    };
  }

  showItemModalBox = () => {
    this.setState({
      isItemPopupShow: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isItemPopupShow: false,
    });
  };

  handleAddItem =() => {
    this.setState({
        isItemPopupShow: false,
      });
      this.props.addItemToCart({
        id : this.props.data.id,
        food_name : this.props.data.food_name,
        price : this.props.data.price,
        image : this.props.data.image,
        total : this.props.data.price,
        quantity : 1
      })
  }



  render() {
    const { id, food_name, price, desc, image } = this.props.data;

    return (
      <div className="item-wrapper">
        <TransitionsModal
          isModalOpen={this.state.isItemPopupShow}
          handleAddItem={this.handleAddItem}
          modaleClose={this.handleCloseModal}
          name={food_name}
          price={price}
          image={image}
        />
        <div className="section_left">
          <h2>{food_name}</h2>
          <h4>₹{price}</h4>
          <p>{desc}</p>
        </div>
        <div className="section_right">
          <img src={image} alt="" />
          <Button
            variant="contained"
            color="primary"
            onClick={this.showItemModalBox}
          >
            ADD
          </Button>
        </div>
      </div>
    );
  }
}
