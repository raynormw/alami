import Axios from 'axios';

import { base_api } from 'services/api';

export const addSeller = (data) => {
  return dispatch => {
    dispatch({ type: 'ADD_SELLER' });
    Axios({
      method: 'post',
      url: base_api + 'addSeller',
      data
    })
    .then((res) => {
      console.log(res, 'res');
      // const data = res.data.data;
      // dispatch({ type: 'ADD_SELLER_SUCCESS', res });
    })
    .catch((error) => {
      console.log(error, 'error');

      // dispatch({ type: 'ADD_SELLER_ERROR' });
    });
  }
}

// export const addSeller = (data) => {
//   return dispatch => {
//     dispatch({ type: 'ADD_SELLER' });
//     // POST request using fetch()
//     fetch('https://dev.dummy-api.alamisharia.co.id/addSeller', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         'Content-Type': 'application/json'
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
