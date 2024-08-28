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

  return (
    <AuthCardWrapper>
      <Grid>
        <Grid item xs={12}>
          <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'} textAlign={'center'}>
            Algo Trading
          </Typography>
          <Typography pb={2} textAlign={'center'} fontFamily={'sans-serif'}>
            Login into your account to start adding strategies to your trades!{' '}
            <Typography
              component="span"
              color="secondary"
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => setisForgetPasswordShow(false)} // onClick function added here
            >
              Login
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit} {...others}>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Client ID</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email Address / Client ID"
                    inputProps={{}}
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
