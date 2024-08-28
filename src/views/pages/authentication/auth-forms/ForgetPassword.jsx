import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCardWrapper from 'views/pages/AuthCardWrapper';

// ================================|| AUTH3 - LOGIN ||================================ //

const ForgetPassword = ({ setisForgetPasswordShow, ...others }) => {
  const theme = useTheme();
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const forgotPasswordMutation = useMutation((data) => axios.post('http://jetalgosoftware.com/api/auth/forgot-password', data), {
    onSuccess: (response) => {
      showSnackbar('Otp Send!', 'success');
    },
    onError: (error) => {
      showSnackbar(error.response?.data, 'error');
      console.error('Login failed:', error.response?.data || error.message);
    }
  });

  return (
    <AuthCardWrapper>
      <Grid>
        <Grid item xs={12}>
          <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'} textAlign={'center'}>
            Algo Trading
          </Typography>
          <Typography pb={2} textAlign={'center'} fontFamily={'sans-serif'}>
            Enter your details to receive an OTP to reset your password.{' '}
            <Typography
              component="span"
              color="secondary"
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => setisForgetPasswordShow(false)}
            >
              Login
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              phoneNumber: '',
              email: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              phoneNumber: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]+$/, 'Must be a valid phone number')
                .max(15),
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
            })}
            onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
              // Trigger the mutation on form submit
              forgotPasswordMutation.mutate(
                {
                  mobile: values.phoneNumber,
                  email: values.email
                },
                {
                  onError: (error) => {
                    setStatus({ success: false });
                  },
                  onSettled: () => {
                    setSubmitting(false);
                  }
                }
              );
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit} {...others}>
                <FormControl fullWidth error={Boolean(touched.phoneNumber && errors.phoneNumber)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-phoneNumber">Phone Number</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-phoneNumber"
                    type="text"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Phone Number"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <FormHelperText error id="standard-weight-helper-text-phoneNumber">
                      {errors.phoneNumber}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email Address"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email">
                      {errors.email}
                    </FormHelperText>
                  )}
                </FormControl>
                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      Send OTP
                    </Button>
                  </AnimateButton>
                </Box>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </form>
            )}
          </Formik>
          <Box mt={40} textAlign={'center'}>
            <Typography>Copyright © 2024 Jet Algo Trading. All rights reserved.</Typography>
          </Box>
        </Grid>
      </Grid>
    </AuthCardWrapper>
  );
};

export default ForgetPassword;
