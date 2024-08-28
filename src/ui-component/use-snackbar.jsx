import { useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

const useSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  console.log('inside use snack bar component');

  const showSnackbar = useCallback((message, severity = 'success') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  }, []);

  const SnackbarComponent = () => (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};

export default useSnackbar;
