import Axios from 'axios';

import { base_api, proxy } from 'services/api';

// use http://127.0.0.1:3000 instead of localhost to avoid cors.
export const addSeller = (data) => {
  return dispatch => {
    dispatch({ type: 'ADD_SELLER' });

    Axios({
      method: 'post',
      url: proxy + base_api + 'addSeller',
      data
    })
    .then((res) => {
      const data = res.data.data;
      const code = res.data.code;
      const message = res.data.message;

      if (!data && code === 400) {
        dispatch({ type: 'ADD_SELLER_ERROR', payload: message });
      } else {
        console.log('data seller', data);
        dispatch({ type: 'ADD_SELLER_SUCCESS', payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: 'ADD_SELLER_ERROR', payload: error.message });
    });
  }
}

export const handleVisible = (data) => {
  return dispatch => {
    dispatch({type: 'VISIBLE_CHANGE', payload: data});
  }
}

// export const addSeller = (data) => {
//   return dispatch => {
//     dispatch({ type: 'ADD_SELLER' });
//     // POST request using fetch()
//     fetch('https://cors-anywhere.herokuapp.com/https://dev.dummy-api.alamisharia.co.id/addSeller', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     })
//
//     // Converting to JSON
//     .then(response => {
//       console.log(response, 'response');
//       response.json()
//     })
//
//     // Displaying results to console
//     .then(json => console.log(json, 'json'))
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   }
// }
