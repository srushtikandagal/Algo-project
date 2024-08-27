import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    gradients: {
      purpleBlue: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)',
      orangeRed: 'linear-gradient(45deg, #ff6f00 30%, #ff8e53 90%)',
      greenYellow: 'linear-gradient(45deg, #56ab2f 30%, #a8e063 90%)',
      pinkCyan: 'linear-gradient(45deg, #ff6f91 30%, #00f2fe 90%)',
      customYellow: 'linear-gradient(45deg, #fbd786 30%, #f7797d 90%)'
    },
    customization
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption),
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '8px 24px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
              background: color.primaryDark,
            }
          },
          containedPrimary: {
            background: themeOption.gradients.purpleBlue,
            color: '#fff',
            '&:hover': {
              background: themeOption.gradients.orangeRed
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            '& .MuiCardContent-root': {
              padding: '24px',
            }
          }
        }
      }
    }
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
