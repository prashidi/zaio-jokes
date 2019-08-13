import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
      state.user = action.payload
      localStorage.setItem('user', state.user)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
