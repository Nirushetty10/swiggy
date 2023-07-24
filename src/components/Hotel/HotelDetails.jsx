import React from "react";
import { useParams } from "react-router";
import "./HotelDetails.scss";
import StarIcon from "@material-ui/icons/Star";
import HotelItem from "./HotelItem";

export default function HotelDetails(props) {
  const { id } = useParams();
  let hotel = props.data.find((hotel) => hotel.id === Number(id));

  return (
    <div className="hotel-wrapper">
      <div className="hotel-details">
        <div className="hotel_address">
          <h2>{hotel.hotel_name}</h2>
          <h4>{hotel.type}</h4>
          <h4>{hotel.address}</h4>
        </div>
        <div className="hotel_rating">
          {<StarIcon style={{ color: "green" }} />}
          <h3>{hotel.rating}</h3>
        </div>
      </div>
      <div className="food_details">
         {hotel.foods.map(item => <HotelItem key={item.id} data={item} addItemToCart={props.handleAddToCart}/>)}
      </div>
    </div>
  );
}
