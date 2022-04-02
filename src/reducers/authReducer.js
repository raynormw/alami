const initialState = {
  data: {},
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SESSION_STORAGE':
      return {...state, isAuthenticated: true, isLoading: false, isError: true,  data: action.payload}
    case 'LOGIN':
      return {...state, isLoading: true}
    case 'LOGIN_SUCCESS':
      return {...state, isLoading: false, isAuthenticated: true, data: action.payload}
    case 'LOGIN_ERROR':
      return {...state, isLoading: false, isError: true, errorMessage: action.payload}
    case 'LOGOUT':
      return {...state, isLoading: false, isAuthenticated: false, data: {}}
    case 'INPUT_CHANGE':
      return {...state, isLoading: false, isError: false, errorMessage: "", data: {}}
    default:
      return state
  }
}
