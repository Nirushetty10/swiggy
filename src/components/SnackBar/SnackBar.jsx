import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = (theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
});

class CustomizedSnackbars extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Snackbar open={this.props.open} autoHideDuration={3000} onClose={this.props.handleClose}>
          <Alert onClose={this.props.handleClose} severity="success">
            Successfull... Your order is taken.
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(styles)(CustomizedSnackbars);
