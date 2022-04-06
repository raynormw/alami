const initialState = {
  data: {},
  listData: [],
  searchData: [],
  isLoading: false,
  isVisible: false,
  isVisibleList: false,
  isVisibleSearch: false,
  isError: false,
  errorMessage: "",
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, isLoading: true}
    case 'GET_PRODUCT':
      return {...state, isLoading: true}
    case 'SEARCH_PRODUCT':
      return {...state, isLoading: true}
    case 'ADD_PRODUCT_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisible: true, data: action.payload}
    case 'ADD_PRODUCT_ERROR':
      return {...state, isLoading: false, isError: true, isVisible: true, errorMessage: action.payload}
    case 'GET_PRODUCT_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisibleList: false, listData: action.payload}
    case 'GET_PRODUCT_ERROR':
      return {...state, isLoading: false, isError: true, isVisibleList: true, errorMessage: action.payload}
    case 'SEARCH_PRODUCT_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisibleSearch: false, searchData: action.payload}
    case 'SEARCH_PRODUCT_ERROR':
      return {...state, isLoading: false, isError: true, isVisibleSearch: true, errorMessage: action.payload}
    case 'VISIBLE_CHANGE_PRODUCT':
      return {
        ...state,
        isVisible: action.payload.isVisible,
        isVisibleList: action.payload.isVisibleList,
        isVisibleSearch: action.payload.isVisibleSearch,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}
