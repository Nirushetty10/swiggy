import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function AddedToCartSnackbar(props) {
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
   props.closeSnackBar();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Added to cart Successfully!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
