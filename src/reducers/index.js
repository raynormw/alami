import { combineReducers } from 'redux';

import sellerReducer from 'reducers/sellerReducer';

export default combineReducers({
  seller: sellerReducer,
});
