import fetchActions from "../actions/fetchActions"

const fetchReducer = (state, action) => {
  switch (action.type) {
    case fetchActions.FETCHING:
      return { ...state, loading: true }
    case fetchActions.FETCHED:
      return { ...state, loading: false, data: action.payload }
    case fetchActions.FETCHED_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default fetchReducer
