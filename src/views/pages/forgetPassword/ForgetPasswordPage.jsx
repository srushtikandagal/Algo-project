import React, { useState, Suspense } from 'react';

const ForgetPasswordSection = React.lazy(() => import('./ForgetPasswordSection')); // Lazy load ForgetPassword component
const OTPVerificationSection = React.lazy(() => import('./OTPSection')); // Lazy load OTPVerification component
const ResetPasswordSection = React.lazy(() => import('./ResetPasswordSection')); // Lazy load ResetPassword component

const ForgetPasswordPage = ({ setisForgetPasswordShow }) => {
  const [currentStep, setCurrentStep] = useState('forgetPassword'); // Manages the current step in the flow
  const [email, setEmail] = useState(''); // Stores email for OTP verification
  const [otp, setOtp] = useState(''); // Stores OTP for verification

  const handleEmailSubmit = (emailValue) => {
    setEmail(emailValue);
    setCurrentStep('otp'); // Move to OTP step
  };

  const handleOTPSubmit = (otpValue) => {
    setOtp(otpValue);
    setCurrentStep('resetPassword'); // Move to reset password step
  };

  const handleResetPassword = () => {
    setCurrentStep('forgetPassword'); // Reset flow after password reset
  };

  // Action to go back to the login page
  const handleLoginClick = () => {
    setisForgetPasswordShow(false); // Go back to the login page
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {currentStep === 'forgetPassword' && (
          <ForgetPasswordSection
            onSubmit={handleEmailSubmit}
            footerLinkAction={handleLoginClick} // Pass the handleLoginClick function
          />
        )}
        {currentStep === 'otp' && <OTPVerificationSection email={email} onSubmit={handleOTPSubmit} />}
        {currentStep === 'resetPassword' && <ResetPasswordSection onSubmit={handleResetPassword} footerLinkAction={handleLoginClick} />}
      </Suspense>
    </>
  );
};

export default ForgetPasswordPage;
