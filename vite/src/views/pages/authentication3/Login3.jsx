import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../authentication/auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import ImageCarousel from 'ui-component/ImageCarousel ';

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
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
                    <AuthLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <Typography component={Link} to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                      Don&apos;t have an account? Sign Up
                    </Typography>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AuthFooter />
    </AuthWrapper1>
  );
};

export default Login;
