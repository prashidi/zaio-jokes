import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

//loading user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const user = localStorage.getItem("user");

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

//Login user
export const login = (email, password) => dispatch => {
  const user = {};
  if (email === "joker@zaio.io" && password === "zaiojoke") {
    user.email = email;
    user.password = password;
    console.log(user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  } else {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => (dispatch, getState) => {
  const user = localStorage.getItem("user");

  if (user) {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: user
    });
  }
};
