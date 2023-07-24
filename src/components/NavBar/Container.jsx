import React, { Component } from "react";
import CardBox from "../Card/Card";
import { Link } from "react-router-dom";

export default class Container extends Component {
  render() {
    return (
      <>
        <h1>Restaurants with online food delivery in Bangalore</h1>
        <div className="grid-container">
          {this.props.data.map((hotel) => (
            <Link to={`/${hotel.id}`} style={{ textDecoration: "none" }}>
              <CardBox
                key={hotel.id}
                id={hotel.id}
                image={hotel.image}
                hotelName={hotel.hotel_name}
                rating={hotel.rating}
                type={hotel.type}
                address={hotel.address}
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
}
