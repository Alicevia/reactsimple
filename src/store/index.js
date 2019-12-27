import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

let store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store