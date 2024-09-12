import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';

// Material-UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Components
import AuthWrapper1 from '../AuthWrapper1';
import AnimateButton from 'ui-component/extended/AnimateButton';
import useSnackbar from 'ui-component/use-snackbar';
import ImageCarousel from 'ui-component/ImageCarousel ';
import AuthCardWrapper from '../AuthCardWrapper';

const ResetPassword = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const resetPasswordMutation = useMutation(
    (data) =>
      axios.post(`https://jetalgosoftware.com/auth/reset/password?uuid=wrvbekbnek&resetToken=${resetToken}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (response) => {
        showSnackbar(response?.data?.msg || 'Password Reset Successfully', 'success');
        setTimeout(() => {
          navigate('/login/');
        }, 1000);
      },
      onError: (error) => {
        showSnackbar(error.response?.data?.error.msg || 'Something went wrong!', 'error');
      }
    }
  );

  return (
    <>
      <AuthWrapper1>
        <Grid container direction="row" justifyContent="space-between" alignItems="stretch" sx={{ minHeight: '100vh' }}>
          <ImageCarousel />
          <Grid item xs={12} md={7} bgcolor={'white'}>
            <Grid direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
              <Grid container sx={{ width: '100%' }} justifyContent="center">
                <AuthCardWrapper>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                      <Typography color="secondary.main" gutterBottom variant="h2" textAlign="center">
                        Reset Password
                      </Typography>
                      <Typography pb={2} textAlign="center" fontFamily="sans-serif" variant="subtitle1">
                        Enter your new password
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Formik
                        initialValues={{
                          password: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                          resetPasswordMutation.mutate(
                            { password: values.password },
                            {
                              onSettled: () => {
                                setSubmitting(false);
                              }
                            }
                          );
                        }}
                      >
                        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                          <form noValidate onSubmit={handleSubmit}>
                            <FormControl
                              fullWidth
                              error={Boolean(touched.password && errors.password)}
                              sx={{ ...theme.typography.customInput }}
                            >
                              <InputLabel htmlFor="outlined-adornment-email-login">New Password</InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-password-reset"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                      size="large"
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="New Password"
                              />
                              {touched.password && errors.password && (
                                <FormHelperText error id="password-reset-error">
                                  {errors.password}
                                </FormHelperText>
                              )}
                            </FormControl>
                            <Box sx={{ mt: 2 }}>
                              <AnimateButton>
                                <Button
                                  disableElevation
                                  disabled={resetPasswordMutation.isLoading}
                                  fullWidth
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                  color="secondary"
                                  startIcon={resetPasswordMutation.isLoading ? <CircularProgress size={20} /> : null}
                                >
                                  Reset Password
                                </Button>
                              </AnimateButton>
                            </Box>
                          </form>
                        )}
                      </Formik>
                    </Grid>
                  </Grid>
                </AuthCardWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AuthWrapper1>
      <SnackbarComponent />
    </>
  );
};

export default ResetPassword;
