import Axios from 'axios';

import { base_api } from 'services/api';

export const getSessionStorage = () => {
  return dispatch => {
    let data = sessionStorage.getItem('warung-tepat');

    if (data) {
      data = JSON.parse(data);
      dispatch({
        type: 'GET_SESSION_STORAGE',
        payload: data
      });
    }
  }
}

export const login = (username, password) => {
  return dispatch => {
    dispatch({ type: 'LOGIN' });
    Axios({
      method: 'post',
      url: base_api + 'auth',
      data: {
        username,
        password
      }
    })
    .then((res) => {
      const data = res.data.data;

      dispatch({ type: 'LOGIN_SUCCESS', data });
      sessionStorage.setItem('warung-tepat', JSON.stringify(data));
    })
    .catch((error) => {
      let error_message;

      if(error.response.status === 422) {
        error_message = error.response.data.errors.username
      }
      dispatch({
        type: 'LOGIN_ERROR',
        payload: error_message
      });
    });
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({type: 'LOGOUT'});
    sessionStorage.removeItem('warung-tepat');
  }
}

export const handleChange = () => {
  return dispatch => {
    dispatch({type: 'INPUT_CHANGE'});
  }
}
