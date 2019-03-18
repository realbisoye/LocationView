import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
  it('fetchMarkers return markers', async() => {
    const store = mockStore()
    const actionData = [{
      type: 'LOADING',
    }, {
      type: 'RECEIVE_MARKERS',
      markers: [{
        longitude: -74.044502,
        latitude: 40.689247,
        description: 'Liberty is fine',
        title: 'Status Of Liberty',
      }],
    }]

    await store.dispatch(actions.fetchMarkers())
    const dispatched = store.getActions()
    expect(dispatched[0].type).toEqual(actionData[0].type)
    expect(dispatched[1].type).toEqual(actionData[1].type)
    expect(dispatched[1].payload).toEqual(actionData.markers)
  })

  it('createMarker create a new marker', async() => {
    const store = mockStore()
    const marker = {
      longitude: -73.968285,
      latitude: 40.785091,
      description: 'Central Park playground',
      title: 'Central Park',
    }
    const actionData = [{
      type: 'LOADING',
    }, {
      type: 'CREATE_MARKER',
      marker,
    }]

    await store.dispatch(actions.createMarker(marker))
    const dispatched = store.getActions()
    expect(dispatched[0].type).toEqual(actionData[0].type)
    expect(dispatched[1].type).toEqual(actionData[1].type)
    expect(dispatched[1].payload).toEqual(actionData.marker)
  })

  it('updateMarker update marker data', async() => {
    const store = mockStore()
    const marker = {
      longitude: -73.968285,
      latitude: 40.785091,
      description: 'Central Park playground',
      title: 'Central Park',
    }
    const actionData = [{
      type: 'LOADING',
    }, {
      type: 'UPDATE_MARKER',
      updated: {
        longitude: -73.968285,
        latitude: 40.785091,
        description: 'Central Park playground update',
        title: 'Central Park',
      },
    }]

    await store.dispatch(actions.updateMarker(marker))
    const dispatched = store.getActions()
    expect(dispatched[0].type).toEqual(actionData[0].type)
    expect(dispatched[1].type).toEqual(actionData[1].type)
    expect(dispatched[1].payload).toEqual(actionData.updated)
  })

  it('deleteMarker update marker data', async() => {
    const store = mockStore()
    const actionData = [{
      type: 'LOADING',
    }, {
      type: 'DELETE_MARKER',
    }]

    await store.dispatch(actions.deleteMarker())
    const dispatched = store.getActions()
    expect(dispatched[0].type).toEqual(actionData[0].type)
    expect(dispatched[1].type).toEqual(actionData[1].type)
  })

  it('toggleMarkerForm update marker data', async() => {
    const store = mockStore()
    const actionData = {
      type: 'TOGGLE_MARKER_FORM',
    }

    await store.dispatch(actions.toggleMarkerForm(true))
    const dispatched = store.getActions()
    expect(dispatched[0].type).toEqual(actionData.type)
    expect(dispatched[0].payload.open).toEqual(true)
  })
})
