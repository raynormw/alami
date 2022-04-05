import { combineReducers } from 'redux';

import sellerReducer from 'reducers/sellerReducer';
import productReducer from 'reducers/productReducer';

export default combineReducers({
  seller: sellerReducer,
  product: productReducer,
});
