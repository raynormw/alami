const initialState = {
  data: {},
  isLoading: false,
}

export default function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SELLER':
      return {...state, isLoading: true}
    case 'ADD_SELLER_SUCCESS':
      return {...state, isLoading: false, data: action.payload}
    case 'ADD_SELLER_ERROR':
      return {...state, isLoading: false}
    default:
      return state
  }
}
