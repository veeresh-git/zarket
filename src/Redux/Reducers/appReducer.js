import * as types from "../constants";

const initState = {
  loader: false,
  data: [],
};

const app = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case types.HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default app;
