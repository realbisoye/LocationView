import request from '../apiRequest'

export const actionTypes = {
  LOADING: 'LOADING',
  CREATE_MARKER: 'CREATE_MARKER',
  RECEIVE_MARKERS: 'RECEIVE_MARKERS',
  UPDATE_MARKER: 'UPDATE_MARKER',
  DELETE_MARKER: 'DELETE_MARKER',
  ERROR: 'ERROR',
  TOGGLE_MARKER_FORM: 'TOGGLE_MARKER_FORM',
}

export const fetchMarkers = () => {
  return async(dispatch) => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    })
    const response = await request('/markers', 'GET')
    if (response.error) {
      return dispatch({
        type: actionTypes.ERROR,
        payload: response.message,
      })
    }
    return dispatch({
      type: actionTypes.RECEIVE_MARKERS,
      payload: response.data,
    })
  }
}

export const createMarker = (data) => {
  return async(dispatch) => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    })
    const response = await request('/markers', 'POST', data)
    if (response.error) {
      return dispatch({
        type: actionTypes.ERROR,
        payload: response.message,
      })
    }
    return dispatch({
      type: actionTypes.CREATE_MARKER,
      payload: response.data,
    })
  }
}

export const updateMarker = (id, data) => {
  return async(dispatch) => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    })
    const response = await request(`/markers/${id}`, 'PATCH', data)
    if (response.error) {
      return dispatch({
        type: actionTypes.ERROR,
        payload: response.message,
      })
    }
    return dispatch({
      type: actionTypes.UPDATE_MARKER,
      payload: response.data,
    })
  }
}

export const deleteMarker = (id) => {
  return async(dispatch) => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    })
    const response = await request(`/markers/${id}`, 'DELETE')
    if (response.error) {
      return dispatch({
        type: actionTypes.ERROR,
        payload: response.message,
      })
    }
    return dispatch({
      type: actionTypes.DELETE_MARKER,
      payload: id,
    })
  }
}

export const toggleMarkerForm = (open) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_MARKER_FORM,
      payload: {open},
    })
  }
}