import {actionTypes} from '../actions'
export const initialState = {
  markers: [],
  openForm: false,
  loading: false,
  error: false,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case actionTypes.CREATE_MARKER: {
      const markers = state.markers
      markers.push(action.payload)
      return {
        ...state,
        loading: false,
        openForm: false,
        error: false,
        markers,
      }
    }
    case actionTypes.RECEIVE_MARKERS: {
      return {
        ...state,
        loading: false,
        error: false,
        markers: action.payload,
      }
    }
    case actionTypes.UPDATE_MARKER: {
      const markers = state.markers
      const updated = action.payload
      const index = markers.findIndex((marker) => marker._id === updated._id)

      if (index > -1) {
        markers[index] = updated
      }
      return {
        ...state,
        loading: false,
        openForm: false,
        error: false,
        markers,
      }
    }
    case actionTypes.DELETE_MARKER: {
      const markers = state.markers.filter((marker) => marker._id !== action.payload)
      return {
        ...state,
        loading: false,
        error: false,
        markers,
      }
    }
    case actionTypes.ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      }
    }
    case actionTypes.TOGGLE_MARKER_FORM: {
      return {
        ...state,
        openForm: action.payload.open,
      }
    }
    default:
      return state
  }
}
