import {SIGN_IN} from '../Actions/ActionTypes';

const initialstate = {
  data: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SIGN_IN:
      var data = [];
      if (action.payload.length) {
        data = state.data.length
          ? state.data.concat(action.payload)
          : action.payload;
      }
      return {
        data: data,
      };
    default:
      return state;
  }
};
