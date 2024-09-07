import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Typography, Button, Grid, FormControl, FormHelperText, CircularProgress } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCardWrapper from 'views/pages/AuthCardWrapper';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useSnackbar from 'ui-component/use-snackbar';

const OTPVerification = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (otpValue) => {
    setOtp(otpValue);
    if (otpValue.length !== 5) {
      setError('Please enter a 5-digit OTP.');
    } else {
      setError('');
    }
  };

  const otpMutation = useMutation(
    (userData) =>
      axios.post('http://jetalgosoftware.com/auth/validate/otp?uuid=wrvbekbnek', userData, {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token')
        }
      }),
    {
      onSuccess: (response) => {
        showSnackbar('Registration successful!', 'success');
        localStorage.removeItem('token');
        localStorage.setItem('authToken', response.data.auth_token); // Assuming `auth_token` is returned on registration
        // Delay navigation to allow snackbar to be visible
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      },
      onError: (error) => {
        showSnackbar(error.response?.data?.error.msg || 'Registration failed. Please try again.', 'error');
      }
    }
  );

  return (
    <>
      <AuthCardWrapper>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography color="secondary.main" gutterBottom variant="h2" textAlign="center">
              OTP Verification
            </Typography>
            <Typography pb={2} textAlign="center" fontFamily="sans-serif">
              Enter the OTP sent to {email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={Boolean(error)}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={5}
                  isInputNum
                  shouldAutoFocus
                  renderSeparator={<span style={{ width: '8px' }}></span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: '50px',
                    height: '50px',
                    margin: '0 5px',
                    fontSize: '18px',
                    borderRadius: '4px',
                    border: '1px solid #ddd'
                  }}
                />
              </Box>
              {error && (
                <FormHelperText error id="otp-error-text">
                  {error}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => {
                  console.log('otp', otp);
                  otpMutation.mutate({ otp });
                }}
                disabled={otp.length !== 5}
                startIcon={otpMutation.isLoading ? <CircularProgress size={20} /> : null}
              >
                Verify OTP
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </AuthCardWrapper>
      <SnackbarComponent />
    </>
  );
};

export default React.memo(OTPVerification);
