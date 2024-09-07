import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useEffect } from 'react';
import { SET_IS_USER_AUTHENTICATED } from 'store/actions';
import useSnackbar from 'ui-component/use-snackbar';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();

  const { showSnackbar, SnackbarComponent } = useSnackbar();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('Token from local storage:', token); // Debugging log
    if (token) {
      dispatch({ type: SET_IS_USER_AUTHENTICATED, isUserAuthenticated: true });
    } else {
      dispatch({ type: SET_IS_USER_AUTHENTICATED, isUserAuthenticated: false });
    }
  }, [dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <RouterProvider router={router} />
        </NavigationScroll>
        <SnackbarComponent />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
