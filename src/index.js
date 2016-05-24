import React                                          from 'react';
import { Provider }                                   from 'react-redux';
import ReactDOM                                       from 'react-dom';
import configureStore                                 from './store';
import { App }                                        from './App';
import { Router,
          Route,
          IndexRoute,
          browserHistory,
          hashHistory,
          useRouterHistory,
          Redirect}                                   from 'react-router';
import { syncHistoryWithStore }                       from 'react-router-redux';
import * as TodoAction                                from './actions/';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(TodoAction.getDbState());

const node = (
      <Provider store={store}>
          <Router history={history}>
             <Route path="/">
              <IndexRoute component={App}/>
              <Redirect from="All" to="#"/>
              <Route path="Starred" component={App}/>
              <Route path="Active" component={App}/>
              <Route path="Complete" component={App}/>
              {/*
                <Redirect from="#/Starred" to='Starred' />
                <Redirect from="#/Active" to='Active' />
                <Redirect from="#/Complete" to='Complete' />
              */}
           </Route>
          </Router>
      </Provider>
);

ReactDOM.render(node, document.getElementById('root'));
