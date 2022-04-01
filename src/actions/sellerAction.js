import Axios from 'axios';

import { base_api } from 'services/api';

// export const addSeller = (data) => {
//   return dispatch => {
//     dispatch({ type: 'ADD_SELLER' });
//     Axios({
//       method: 'post',
//       url: "https://dev.dummy-api.alamisharia.co.id/addSeller",
//       data
//     })
//     .then((response) => {
//       console.log(response, 'res');
//       // const data = res.data.data;
//       dispatch({ type: 'ADD_SELLER_SUCCESS', response });
//     })
//     .catch((error) => {
//       console.log(error, 'error');
//       console.log(error.response, 'error response');
//       // let error_message;
//
//       // if(error.response.status === 422) {
//       //   error_message = error.response.data.errors.username
//       // }
//       dispatch({ type: 'ADD_SELLER_ERROR'});
//     });
//   }
// }

export const addSeller = (data) => {
  return dispatch => {
    dispatch({ type: 'ADD_SELLER' });
    // POST request using fetch()
    fetch('https://dev.dummy-api.alamisharia.co.id/addSeller', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })

    // Converting to JSON
    .then(response => {
      console.log(response, 'response');
      response.json()
    })

    // Displaying results to console
    .then(json => console.log(json, 'json'))
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
