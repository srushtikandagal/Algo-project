// ResetPassword.js
import React from 'react';
import CustomAuthForm from 'views/pages/forgetPassword/component/customForm/customForm';
import * as Yup from 'yup';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AuthLogin from '../authentication/auth-forms/AuthLogin';

// assets
import ImageCarousel from 'ui-component/ImageCarousel ';
import ForgetPasswordPage from '../forgetPassword/ForgetPasswordPage';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const initialValues = { password: '' };
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const { resetToken } = useParams();

  console.log('reset token: ' + resetToken);

  const resetPasswordMutation = useMutation(
    (data) =>
      axios.post(`https://jetalgosoftware.com/auth/reset/password?uuid=wrvbekbnek&resetToken=${resetToken}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (response) => {
        console.log('response', response);
        showSnackbar(response?.data?.msg || 'Password Reset Successfully', 'success');
      }
    },
    {
      onError: (error) => {
        showSnackbar(error.response?.data?.error.msg || 'Something went wrong!', 'error');
      }
    }
  );

  const handelPasswordChange = (newPassword) => {
    console.log('handel password change', newPassword);
    resetPasswordMutation.mutate({ password: newPassword });
  };

  return (
    <AuthWrapper1>
      <Grid container direction="row" justifyContent="space-between" alignItems="stretch" sx={{ minHeight: '100vh' }}>
        <ImageCarousel />
        <Grid item xs={12} md={7} bgcolor={'white'}>
          <Grid direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid container sx={{ width: '100%' }} justifyContent="center">
              <CustomAuthForm
                title="Reset Password"
                subtitle="Enter your new password"
                buttonText="Reset Password"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log('misdismdim');
                  handelPasswordChange(values.password);
                }}
                inputLabel="New Password"
                footerLinkText="Login"
                footerLinkAction={() => {
                  console.log('kndskdks');
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ResetPassword;
