import Axios from 'axios';

import { base_api, proxy } from 'services/api';

// use http://127.0.0.1:3000 instead of localhost to avoid cors.
export const addProduct = (data) => {
  return dispatch => {
    dispatch({ type: 'ADD_PRODUCT' });

    Axios({
      method: 'post',
      url: proxy + base_api + 'addProduct',
      data
    })
    .then((res) => {
      const data = res.data.data;
      const code = res.data.code;
      const message = res.data.message;

      if (!data && code === 400) {
        dispatch({ type: 'ADD_PRODUCT_ERROR', payload: message });
      } else {
        console.log('data product', data);
        dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: 'ADD_PRODUCT_ERROR', payload: error.message });
    });
  }
}

export const getProduct = (query) => {
  return dispatch => {
    dispatch({ type: 'GET_PRODUCT' });

    Axios({
      method: 'get',
      url: proxy + base_api + 'listProductBySellerId?seller_id=' + query
    })
    .then((res) => {
      const data = res.data.data;
      const listData = data.map((item, index) => {
        return {...item, key: index + 1}
      });

      dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: listData });
    })
    .catch((error) => {
      dispatch({ type: 'GET_PRODUCT_ERROR', payload: error.message });
    });
  }
}

export const handleVisibleProduct = (data) => {
  return dispatch => {
    dispatch({type: 'VISIBLE_CHANGE_PRODUCT', payload: data});
  }
}
