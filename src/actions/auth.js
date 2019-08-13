import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const user = getState().auth.user;

  if (user) {
    dispatch({
      type: USER_LOADED,
      payload: user
    });
  } else {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
