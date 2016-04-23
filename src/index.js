import React                                          from 'react';
import { Provider }                                   from 'react-redux';
import ReactDOM                                       from 'react-dom';
import configureStore                                 from './store';
import { App }                                        from './App';
import { Router,
          Route,
          IndexRoute,
          browserHistory,
          Redirect}                                   from 'react-router';
import { syncHistoryWithStore }                       from 'react-router-redux';


let db = window.localStorage;

const switchVisible = (state,path) => {
  switch (path) {
    case 'Active':
      return {...state,visible:'SHOW_ACTIVE'};
    case 'Complete':
      return {...state,visible:'SHOW_COMPLETE'};
    case 'Starred':
      return {...state,visible:'SHOW_STAR'};
    default:
      return state;
  }
}

let initState = JSON.parse(db.getItem('mydb'));

const store = configureStore(switchVisible(initState,location.pathname.slice(1)));
const history = syncHistoryWithStore(browserHistory, store);

const node = (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history}>
             <Route path="/">
              <IndexRoute component={App}/>
              <Redirect from="All" to="/" />
              <Route path="Starred" component={App}/>
              <Route path="Active" component={App}/>
              <Route path="Complete" component={App}/>
           </Route>
          </Router>
        </div>
      </Provider>
);

ReactDOM.render(node, document.getElementById('root'));
