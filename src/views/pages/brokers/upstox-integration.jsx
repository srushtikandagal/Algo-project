import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@mui/material';
import Carousel from 'ui-component/carousel';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { SET_AVIALABLE_BROKERS } from 'store/actions';
import { useDispatch } from 'react-redux';

const UpstoxIntegration = () => {
  const validationSchema = Yup.object().shape({
    upstoxClientId: Yup.string().required('Client ID is required'),
    upstoxClientSecret: Yup.string().required('Client Secret is required')
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  const upstoxAuthMutaition = useMutation(
    (data) =>
      axios.post('https://jetalgosoftware.com/broker/upstox/authorization/token/upstox?uuid=ekjwvnbejl', {
        upstoxCode: code,
        ...data
      }),
    {
      onSuccess: (response) => {
        console.log('response: ' + JSON.stringify(response));

        dispatch({ type: SET_AVIALABLE_BROKERS, payload: response.data.response });
        localStorage.setItem('upstox_access_token', response.data.access_token);
        navigate('/dashboard/broker');
      },
      onError: (error) => {
        console.log('Error: ' + error);
      }
    }
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Carousel />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Formik
          initialValues={{
            upstoxClientId: '',
            upstoxClientSecret: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            upstoxAuthMutaition.mutate(
              {
                upstoxClientId: values.upstoxClientId,
                upstoxClientSecret: values.upstoxClientSecret
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
            <form noValidate onSubmit={handleSubmit}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Upstox Integration
                </Typography>
                <FormControl fullWidth error={Boolean(touched.upstoxClientId && errors.upstoxClientId)} sx={{ mb: 3 }}>
                  <InputLabel htmlFor="outlined-adornment-upstoxClientId">Upstox Client ID</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-upstoxClientId"
                    value={values.upstoxClientId}
                    name="upstoxClientId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Upstox Client ID"
                  />
                  {touched.upstoxClientId && errors.upstoxClientId && <FormHelperText error>{errors.upstoxClientId}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth error={Boolean(touched.upstoxClientSecret && errors.upstoxClientSecret)} sx={{ mb: 3 }}>
                  <InputLabel htmlFor="outlined-adornment-upstoxClientSecret">Upstox Client Secret</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-upstoxClientSecret"
                    value={values.upstoxClientSecret}
                    name="upstoxClientSecret"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Upstox Client Secret"
                    type="password"
                  />
                  {touched.upstoxClientSecret && errors.upstoxClientSecret && (
                    <FormHelperText error>{errors.upstoxClientSecret}</FormHelperText>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={upstoxAuthMutaition.isLoading}
                  startIcon={upstoxAuthMutaition.isLoading ? <CircularProgress size={20} /> : null}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default UpstoxIntegration;

const imageSources = [
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide4.png',
  'https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_03_mob.webp',
  'https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_04_mob.webp',
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide4.png',
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide3.png'
];
