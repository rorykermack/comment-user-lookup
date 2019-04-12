import { push } from 'react-router-redux';

/* CONSTS */
export const APP_SET_PROCESS = 'APP_SET_PROCESS';
/* CONSTS */

/* Setters */
interface appSetProcessPayload { key: string; value: boolean; }
export const appSetProcess = (payload: appSetProcessPayload) => {
  return {
    payload,
    type: APP_SET_PROCESS
  }
};
/* --- Setters */

export const navigateToScreen = (location: string) => (dispatch) => {
  return dispatch(push(location));
}