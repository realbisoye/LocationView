import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MainContainer from '../../app/container/main'

const mockStore = configureStore([thunk])

const initialState = {
  markers: [],
}
let store

describe('Main Container', () => {
  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('render main container', () => {
    const rendered = renderer.create(
      <Provider store={store}>
        <MainContainer />
      </Provider>)

    expect(rendered).toMatchSnapshot()
  })
})
