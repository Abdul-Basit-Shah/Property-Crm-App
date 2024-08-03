import {DARK_MODE} from '../Actions/ActionTypes';

const Initialstate = {
  Theme: true,
};
export default (state = Initialstate, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        Theme: action.payload,
      };
    default:
      return state;
  }
};
