// ResetPassword.js
import React from 'react';
import CustomAuthForm from 'views/pages/forgetPassword/component/customForm/customForm';
import * as Yup from 'yup';

const ResetPassword = ({ onSubmit, footerLinkAction }) => {
  const initialValues = { password: '' };
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  return (
    <CustomAuthForm
      title="Reset Password"
      subtitle="Enter your new password"
      buttonText="Reset Password"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values.password)}
      inputLabel="New Password"
      footerLinkText="Login"
      footerLinkAction={footerLinkAction} // Pass the action to go back to the login page
    />
  );
};

export default React.memo(ResetPassword);
