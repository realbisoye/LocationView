import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Main from './app/container/main'
import store from './app/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
