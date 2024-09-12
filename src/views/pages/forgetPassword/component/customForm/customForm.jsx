import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCardWrapper from 'views/pages/AuthCardWrapper';
import { CircularProgress } from '@mui/material';

const CustomAuthForm = ({
  title,
  subtitle,
  buttonText,
  buttonAction,
  buttonDisabled,
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  isSubmitting,
  inputLabel,
  footerText,
  footerLinkText,
  footerLinkAction,
  ...others
}) => {
  const theme = useTheme();
  return (
    <AuthCardWrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography color="secondary.main" gutterBottom variant="h2" textAlign="center">
            {title}
          </Typography>
          <Typography pb={2} textAlign="center" fontFamily="sans-serif">
            {subtitle}{' '}
            <Typography
              component="span"
              color="primary" // Set text color to blue
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={footerLinkAction} // Attach the click handler
            >
              {footerLinkText}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
              <form noValidate onSubmit={handleSubmit} {...others}>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-email-login">{inputLabel}</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={inputLabel}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </FormControl>
                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting || buttonDisabled}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                      startIcon={isLoading ? <CircularProgress size={20} /> : null}
                    >
                      {buttonText}
                    </Button>
                  </AnimateButton>
                </Box>
              </form>
            )}
          </Formik>
          {footerText && (
            <Box mt={46} textAlign="center">
              <Typography>{footerText}</Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </AuthCardWrapper>
  );
};

export default CustomAuthForm;
