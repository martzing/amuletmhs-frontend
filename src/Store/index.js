import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../Reducers'

export default function storeConfig(initialState) {
  let middlewares = []
  if (process.env.NODE_ENV === 'production') {
    middlewares = [thunkMiddleware]
  } else {
    middlewares = [thunkMiddleware, createLogger()]
  }
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
  return store
}