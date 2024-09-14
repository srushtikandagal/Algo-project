// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
export const SET_IS_USER_AUTHENTICATED = '@customization/SET_IS_USER_AUTHENTICATED';
export const SET_AVIALABLE_BROKERS = '@customization/SET_AVIALABLE_BROKERS';
// Risk Disclouser Modal State
export const SET_IS_MODAL_OPEN = '@customization/SET_IS_MODAL_OPEN';

export const setIsModalOpen = (isOpen) => ({
  type: SET_IS_MODAL_OPEN,
  isOpen
});
