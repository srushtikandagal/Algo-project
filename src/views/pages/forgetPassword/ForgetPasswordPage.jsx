import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, Suspense } from 'react';
import useSnackbar from 'ui-component/use-snackbar';

const ForgetPasswordSection = React.lazy(() => import('./ForgetPasswordSection')); // Lazy load ForgetPassword component

const ForgetPasswordPage = ({ setisForgetPasswordShow }) => {
  const [email, setEmail] = useState('');
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const forgotPasswordMutation = useMutation(
    (data) =>
      axios.post('https://jetalgosoftware.com/auth/forgot/password?uuid=wrvbekbnek', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (response) => {
        console.log('response', response);
        showSnackbar(response?.data?.msg || 'Email sent Successfully', 'success');
      },
      onError: (error) => {
        showSnackbar(error.response?.data?.error.msg || 'failed. Please try again.', 'error');
      }
    }
  );

  const handleEmailSubmit = (emailValue) => {
    console.log('inside forgot password function', emailValue);
    setEmail(emailValue);
    try {
      forgotPasswordMutation.mutate({
        email_id: emailValue
      });
    } catch (e) {
      console.error('Error on forgot password', e);
      showSnackbar('Error on forgot password', 'error');
    }
  };

  const handleLoginClick = () => {
    setisForgetPasswordShow(false);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ForgetPasswordSection
          onSubmit={handleEmailSubmit}
          footerLinkAction={handleLoginClick}
          isLoading={forgotPasswordMutation.isLoading}
        />
        <SnackbarComponent />
      </Suspense>
    </>
  );
};

export default ForgetPasswordPage;
