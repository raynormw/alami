const initialState = {
  data: {},
  listData: [],
  isLoading: false,
  isVisible: false,
  isError: false,
  errorMessage: "",
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, isLoading: true}
    case 'GET_PRODUCT':
      return {...state, isLoading: true}
    case 'ADD_PRODUCT_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisible: true, data: action.payload}
    case 'ADD_PRODUCT_ERROR':
      return {...state, isLoading: false, isError: true, isVisible: true, errorMessage: action.payload}
    case 'GET_PRODUCT_SUCCESS':
      return {...state, isLoading: false, isError: false, listData: action.payload}
    case 'GET_PRODUCT_ERROR':
      return {...state, isLoading: false, isError: true, isVisible: true, errorMessage: action.payload}
    case 'VISIBLE_CHANGE_PRODUCT':
      return {...state, isVisible: action.payload.isVisible, isError: action.payload.isError, errorMessage: action.payload.errorMessage,}
    default:
      return state
  }
}
