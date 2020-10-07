import Reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
