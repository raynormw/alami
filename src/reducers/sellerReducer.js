const initialState = {
  data: {},
  listSeller: [],
  searchData: [],
  isLoading: false,
  isVisible: false,
  isVisibleList: false,
  isVisibleSearch: false,
  isError: false,
  errorMessage: "",
}

export default function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SELLER':
      return {...state, isLoading: true}
    case 'GET_SELLER':
      return {...state, isLoading: true}
    case 'SEARCH_SELLER':
      return {...state, isLoading: true}
    case 'ADD_SELLER_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisible: true, data: action.payload.data}
    case 'ADD_SELLER_ERROR':
      return {...state, isLoading: false, isError: true, isVisible: true, errorMessage: action.payload}
    case 'GET_SELLER_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisibleList: false, listSeller: action.payload}
    case 'GET_SELLER_ERROR':
      return {...state, isLoading: false, isError: true, isVisibleList: true, errorMessage: action.payload}
    case 'SEARCH_SELLER_SUCCESS':
      return {...state, isLoading: false, isError: false, isVisibleSearch: false, searchData: action.payload}
    case 'SEARCH_SELLER_ERROR':
      return {...state, isLoading: false, isError: true, isVisibleSearch: true, errorMessage: action.payload}
    case 'VISIBLE_CHANGE':
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
