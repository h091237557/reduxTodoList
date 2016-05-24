import { createStore, applyMiddleware, compose }  from 'redux';
import createLogger                               from 'redux-logger';
import rootReducer                                from '../reducers';
import { browserHistory }                         from 'react-router';
import { routerMiddleware }                       from 'react-router-redux';
import thunk                                      from 'redux-thunk';
import saveToLocalMiddleware                      from '../middleware/saveToLocalMiddleware';

let finalCreateStore = compose(
    applyMiddleware(
        thunk,
        createLogger({
        level: 'info',
        collapsed: true
      }),
      saveToLocalMiddleware(),
      routerMiddleware(browserHistory)
    )
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
