import React, { Component } from "react";
import {  Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";


const styles = (theme) => ({
  root: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    textDecoration : "none",
    // transition: "transform 500ms",
    "&:hover": {
      transform:"scale(0.95)"
    }
  },
  heading: {
    fontSize: "1rem",
    color: "#1a1a1a",
  },
  rating : {
    fontSize: "0.7rem",
  },
  type : {
    fontSize: "0.9rem"
  },
  address : {
    fontSize: "0.9rem"
  }
});

class CardBox extends Component {
 
  render() {
    const { classes } = this.props;
    const {image,hotelName,rating,type,address} = this.props;
    return (
      <Card className={classes.root} onClick={this.handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent style={{paddingTop: "0px",paddingBottom: "0px"}}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.heading}
              style={{paddingTop: "0px",paddingBottom: "0px"}}
            >
              {hotelName}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.rating}
            >
              Rating-{rating}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.type}
            >
              {type}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.address}
            >
              {address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardBox);
