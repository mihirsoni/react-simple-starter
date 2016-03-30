import { createStore as _createStore, applyMiddleware } from 'redux';

export default function configureStore() {
  const middleware = [];
  // We need logger only in Dev mode
  if (__DEVELOPMENT__) {
    const reduxLogger = require('redux-logger');
    const loggerMiddleware = reduxLogger();
    middleware.push(loggerMiddleware);
  }
  const finalCreateStore = applyMiddleware(...middleware)(_createStore);
  const reducer = require('./reducers').default;
  const store = finalCreateStore(reducer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
