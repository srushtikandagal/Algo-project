import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useSnackbar from 'ui-component/use-snackbar';
import OTPSection from 'views/pages/forgetPassword/OTPSection';
import { CircularProgress } from '@mui/material';

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [strength, setStrength] = useState(0);
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState();
  const [currentStep, setCurrentStep] = useState('register');
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const navigate = useNavigate();

  const registerMutation = useMutation(
    (userData) =>
      axios.post('http://jetalgosoftware.com/auth/register?uuid=wrvbekbnek', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (response) => {
        localStorage.setItem('token', response.data.token); // Assuming `auth_token` is returned on registration
        setCurrentStep('otp-section');
      },
      onError: (error) => {
        showSnackbar(error.response?.data?.error.msg || 'Registration failed. Please try again.', 'error');
      }
    }
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <>
      {currentStep === 'register' ? (
        <>
          <Grid container direction="column" justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <AnimateButton>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => console.error('Register')}
                  size="large"
                  sx={{
                    color: 'grey.700',
                    backgroundColor: theme.palette.grey[50],
                    borderColor: theme.palette.grey[100]
                  }}
                >
                  <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                    <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                  </Box>
                  Sign up with Google
                </Button>
              </AnimateButton>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ alignItems: 'center', display: 'flex' }}>
                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                <Button
                  variant="outlined"
                  sx={{
                    cursor: 'unset',
                    m: 2,
                    py: 0.5,
                    px: 7,
                    borderColor: `${theme.palette.grey[100]} !important`,
                    color: `${theme.palette.grey[900]}!important`,
                    fontWeight: 500,
                    borderRadius: `${customization.borderRadius}px`
                  }}
                  disableRipple
                  disabled
                >
                  OR
                </Button>
                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
              </Box>
            </Grid>
            <Grid item xs={12} container alignItems="center" justifyContent="center">
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Sign up with Email address</Typography>
              </Box>
            </Grid>
          </Grid>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              password: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().max(255).required('First Name is required'),
              lastName: Yup.string().max(255).required('Last Name is required'),
              phoneNumber: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]+$/, 'Must be a valid phone number')
                .max(15),
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setStatus, setSubmitting }) => {
              try {
                setEmail(values.email);
                await registerMutation.mutateAsync({
                  first_name: values.firstName,
                  last_name: values.lastName,
                  contact_number: values.phoneNumber,
                  email_id: values.email,
                  password: values.password
                });
              } catch (error) {
                console.log('error on signup', error.response?.data?.message);
                setStatus({ success: false });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit} {...others}>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      name="firstName"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      sx={{ ...theme.typography.customInput }}
                    />
                    {touched.firstName && errors.firstName && <FormHelperText error>{errors.firstName}</FormHelperText>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      name="lastName"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      sx={{ ...theme.typography.customInput }}
                    />
                    {touched.lastName && errors.lastName && <FormHelperText error>{errors.lastName}</FormHelperText>}
                  </Grid>
                </Grid>
                <FormControl fullWidth error={Boolean(touched.phoneNumber && errors.phoneNumber)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-phone-register">Phone Number</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-phone-register"
                    type="text"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Phone Number"
                  />
                  {touched.phoneNumber && errors.phoneNumber && <FormHelperText error>{errors.phoneNumber}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-email-register">Email ID</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-register"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email ID"
                  />
                  {touched.email && errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    label="Password"
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
                  />
                  {touched.password && errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                </FormControl>
                {strength !== 0 && (
                  <FormControl fullWidth>
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" fontSize="0.75rem">
                            {level?.label}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </FormControl>
                )}
                <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
                      label={<Typography variant="body2">I agree to the terms and conditions</Typography>}
                    />
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        startIcon={registerMutation.isLoading ? <CircularProgress size={20} /> : null}
                      >
                        Register
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </>
      ) : null}
      {currentStep === 'otp-section' ? <OTPSection email={email} /> : null}
      <SnackbarComponent />
    </>
  );
};

export default AuthRegister;
