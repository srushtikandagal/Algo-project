import { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AuthLogin from '../authentication/auth-forms/AuthLogin';

// assets
import AuthFooter from 'ui-component/cards/AuthFooter';
import ImageCarousel from 'ui-component/ImageCarousel ';
import ForgetPassword from '../authentication/auth-forms/ForgetPassword';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';

const Login = () => {
  const [isForgetPasswordShow, setisForgetPasswordShow] = useState(false);
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="row" justifyContent="space-between" alignItems="stretch" sx={{ minHeight: '100vh' }}>
        <ImageCarousel />

        {/* Slide transition for AuthLogin and ForgetPassword components */}

        <Grid item xs={12} md={7} bgcolor={'white'}>
          <Grid direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid container sx={{ width: '100%' }} justifyContent="center">
              {!isForgetPasswordShow && (
                <AuthCardWrapper>
                  <Grid>
                    <Grid item xs={12}>
                      <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'} textAlign={'center'}>
                        Algo Trading
                      </Typography>
                      <Typography pb={2} textAlign={'center'} fontFamily={'sans-serif'}>
                        Login into your account to start adding strategies to your trades!
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <AuthLogin setisForgetPasswordShow={setisForgetPasswordShow} />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Don&apos;t have an account? Sign Up
                      </Typography>
                    </Grid>
                  </Grid>
                </AuthCardWrapper>
              )}
              {isForgetPasswordShow && <ForgetPassword setisForgetPasswordShow={setisForgetPasswordShow} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AuthFooter />
    </AuthWrapper1>
  );
};

export default Login;
