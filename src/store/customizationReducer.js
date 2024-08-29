import * as actionTypes from './actions';
import config from 'config';

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  isUserAuthenticated: false,
  isModalOpen: false // Add this line for modal state
};

const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return {
        ...state,
        isOpen: [action.id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    case actionTypes.SET_IS_USER_AUTHENTICATED:
      return {
        ...state,
        isUserAuthenticated: action.isUserAuthenticated
      };
    case actionTypes.SET_IS_MODAL_OPEN: // Handle modal state
      return {
        ...state,
        isModalOpen: action.isOpen
      };
    default:
      return state;
  }
};

export default customizationReducer;
