/* eslint-disable import/no-named-default */
import { forwardRef } from 'react';

import { default as MuiSnackbar } from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

interface ISnackbar {
  open: boolean;
  setOpen: Function;
  type: AlertColor | undefined;
  message: String;
}

const Snackbar = ({
  open,
  setOpen,
  type = 'success',
  message = '',
}: ISnackbar) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
export default Snackbar;
