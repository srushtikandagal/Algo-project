import { Link } from 'react-router-dom';
import { useState } from 'react';

// material-ui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthRegister from '../authentication/auth-forms/AuthRegister';
import ImageCarousel from 'ui-component/ImageCarousel ';

// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="row" justifyContent="space-between" alignItems="stretch" sx={{ minHeight: '100vh' }}>
        <ImageCarousel />

        <Grid xs={12} md={7} bgcolor={'white'}>
          <Grid direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid container sx={{ width: '100%' }} justifyContent="center">
              <AuthCardWrapper>
                <Grid c>
                  <Grid item xs={12}>
                    <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'} textAlign={'center'}>
                      Algo Trading
                    </Typography>
                    <Typography pb={2} textAlign={'center'} fontFamily={'sans-serif'}>
                      Login into your account to start adding strategies to your trades!
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthRegister />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                      Already have an account? Sign Up
                    </Typography>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Register;
