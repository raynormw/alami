const initialState = {
  data: {},
  isLoading: false,
  isVisible: false,
  isError: false,
  errorMessage: "",
}

export default function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SELLER':
      return {...state, isLoading: true}
    case 'ADD_SELLER_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisible: true, data: action.payload.data}
    case 'ADD_SELLER_ERROR':
      return {...state, isLoading: false, isError: true, isVisible: true, errorMessage: action.payload}
    case 'VISIBLE_CHANGE':
      return {...state, isVisible: action.payload.isVisible, isError: action.payload.isError, errorMessage: action.payload.errorMessage,}
    default:
      return state
  }
}
