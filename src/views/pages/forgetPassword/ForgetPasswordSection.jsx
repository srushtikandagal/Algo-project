import React from 'react';
import CustomAuthForm from 'views/pages/forgetPassword/component/customForm/customForm';
import * as Yup from 'yup';

const ForgetPasswordSection = ({ onSubmit, footerLinkAction, isLoading }) => {
  const initialValues = { email: '' };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
  });

  return (
    <CustomAuthForm
      title="Algo Trading"
      subtitle="Enter your email to Reset Password Link"
      buttonText="Submit"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values.email)}
      isLoading={isLoading}
      inputLabel="Email Address / Client ID"
      footerText="Copyright © 2024 Jet Algo Trading. All rights reserved."
      footerLinkText="Login"
      footerLinkAction={footerLinkAction}
    />
  );
};

export default React.memo(ForgetPasswordSection);
