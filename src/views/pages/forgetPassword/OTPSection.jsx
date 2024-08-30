import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Typography, Button, Grid, FormControl, FormHelperText } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCardWrapper from 'views/pages/AuthCardWrapper';

const OTPVerification = ({ email, onSubmit }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  // Handle OTP input change
  const handleChange = (otpValue) => {
    setOtp(otpValue);
    if (otpValue.length !== 6) {
      setError('Please enter a 6-digit OTP.');
    } else {
      setError('');
    }
  };

  return (
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
                numInputs={6}
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
              onClick={() => onSubmit(otp)}
              disabled={otp.length !== 6}
            >
              Verify OTP
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </AuthCardWrapper>
  );
};

export default React.memo(OTPVerification);
