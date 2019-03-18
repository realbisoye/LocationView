import * as actions from '../../app/actions'
import reducer, {initialState} from '../../app/reducers'

describe('Reducers', () => {
  it('sets loading state', () => {
    const action = {
      type: actions.actionTypes.LOADING,
    }

    const nextState = reducer(initialState, action)

    expect(nextState.loading).toEqual(true)
  })

  it('receives and store markers', () => {
    const action = {
      payload: [{
        longitude: -74.044502,
        latitude: 40.689247,
        description: 'Liberty is fine',
        title: 'Status Of Liberty',
      }],
      type: actions.actionTypes.RECEIVE_MARKERS,
    }

    const nextState = reducer(initialState, action)

    expect(nextState.markers.length).toEqual(1)
    expect(nextState.markers).toEqual(action.payload)
  })

  it('save new added marker', () => {
    const action = {
      payload: {
        longitude: -73.968285,
        latitude: 40.785091,
        description: 'Central Park playground',
        title: 'Central Park',
      },
      type: actions.actionTypes.CREATE_MARKER,
    }

    initialState.markers = [{
      longitude: -74.044502,
      latitude: 40.689247,
      description: 'Liberty is fine',
      title: 'Status Of Liberty',
    }]

    const nextState = reducer(initialState, action)

    expect(nextState.markers.length).toEqual(2)
    expect(nextState.markers).toContainEqual(action.payload)
  })

  it('update marker data', () => {
    const action = {
      payload: {
        _id: 1,
        longitude: -73.968285,
        latitude: 40.785091,
        description: 'Central Park playground updated',
        title: 'Central Park',
      },
      type: actions.actionTypes.UPDATE_MARKER,
    }

    initialState.markers = [{
      _id: 1,
      longitude: -74.044502,
      latitude: 40.689247,
      description: 'Liberty is fine',
      title: 'Status Of Liberty',
    }]

    const nextState = reducer(initialState, action)

    expect(nextState.markers).toContainEqual(action.payload)
    expect(nextState.markers[0].description).toEqual(action.payload.description)
  })

  it('remove marker on delete', () => {
    const action = {
      payload: 1,
      type: actions.actionTypes.DELETE_MARKER,
    }

    initialState.markers = [{
      _id: 1,
      longitude: -74.044502,
      latitude: 40.689247,
      description: 'Liberty is fine',
      title: 'Status Of Liberty',
    }]

    expect(initialState.markers.length).toEqual(1)

    const nextState = reducer(initialState, action)
    expect(nextState.markers.length).toEqual(0)
  })

  it('set error state on error', () => {
    const action = {
      payload: 'Has error',
      type: actions.actionTypes.ERROR,
    }

    const nextState = reducer(initialState, action)
    expect(nextState.error).toEqual(true)
    expect(nextState.errorMessage).toEqual(action.payload)
  })

  it('set error state on error', () => {
    const action = {
      payload: {open: true},
      type: actions.actionTypes.TOGGLE_MARKER_FORM,
    }

    const nextState = reducer(initialState, action)
    expect(nextState.openForm).toEqual(true)
  })
})
