import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers, {initialState} from '../reducers'

const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, initialState, middlewares)

export default store
