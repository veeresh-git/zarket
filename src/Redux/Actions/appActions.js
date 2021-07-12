import * as types from "../constants";

//get dishes
export const getDishesList = () => (dispatch) => {
  dispatch({ type: types.SHOW_LOADER });
  fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.SET_DATA, payload: res });
      dispatch({ type: types.HIDE_LOADER });
    })
    .catch((err) => {
      console.log(err);
    });
};
