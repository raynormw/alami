import Axios from 'axios';

import { base_api, proxy } from 'services/api';

// use http://127.0.0.1:3000 instead of localhost to avoid cors.
export const addSeller = (data) => {
  return dispatch => {
    dispatch({ type: 'ADD_SELLER' });

    Axios({
      method: 'post',
      url: proxy + base_api + 'addSeller2',
      data
    })
    .then((res) => {
      const data = res.data.data;
      const code = res.data.code;
      const message = res.data.message;

      if (!data && code === 400) {
        dispatch({ type: 'ADD_SELLER_ERROR', payload: message });
      } else {
        dispatch({ type: 'ADD_SELLER_SUCCESS', payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: 'ADD_SELLER_ERROR', payload: error.message });
    });
  }
}

export const getSeller = () => {
  return dispatch => {
    dispatch({ type: 'GET_SELLER' });

    Axios({
      method: 'get',
      url: proxy + base_api + 'getAllSeller'
    })
    .then((res) => {
      const data = res.data.data;
      const listSeller = data.map((item, index) => {
        return {...item, key: index + 1}
      });

      dispatch({ type: 'GET_SELLER_SUCCESS', payload: listSeller });
    })
    .catch((error) => {
      dispatch({ type: 'GET_SELLER_ERROR', payload: error.message });
    });
  }
}

export const searchSeller = (query) => {
  return dispatch => {
    dispatch({ type: 'SEARCH_SELLER' });

    Axios({
      method: 'get',
      url: proxy + base_api + 'getSellerById?seller_id=' + query
    })
    .then((res) => {
      const data = res.data.data;
      const code = res.data.code;
      const message = res.data.message;
      const searchData = {...data, key: 1};
      const arr = [];
      arr.push(searchData);
      console.log(arr, 'arr');

      if (!data && code === 400) {
        dispatch({ type: 'SEARCH_SELLER_ERROR', payload: message });
      } else {
        dispatch({ type: 'SEARCH_SELLER_SUCCESS', payload: arr });
      }
    })
    .catch((error) => {
      dispatch({ type: 'SEARCH_SELLER_ERROR', payload: error.message });
    });
  }
}

export const handleVisible = (data) => {
  return dispatch => {
    dispatch({type: 'VISIBLE_CHANGE', payload: data});
  }
}
