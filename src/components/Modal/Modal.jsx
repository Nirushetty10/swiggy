import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "35rem",
    height: "22rem",
    boxShadow: theme.shadows[5],
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: "1.2rem",
    color: "#424040",
    margin: "1rem 0",
  },
  price: {
    fontSize: "1rem",
    color: "#424040",
  },
  image: {
    width: "15rem",
    height: "10rem",
    objectFit: "cover",
  },
  button: {
    width: "90%",
    height: "2rem",
    marginTop: "1rem",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.modaleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isModalOpen}>
          <div className={classes.paper}>
            <img src={props.image} alt="" className={classes.image} />
            <h2 className={classes.name}>{props.name}</h2>
            <h5 className={classes.price}>₹{props.price}</h5>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={props.handleAddItem}
            >
              ADD ITEM
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
