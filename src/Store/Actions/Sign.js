import {DARK_MODE, SIGN_IN} from './ActionTypes';

export const sign = payload => {
  return {
    payload: payload,
    type: SIGN_IN,
  };
};
export const isdark = payload => {
  return {
    payload: payload,
    type: DARK_MODE,
  };
};
