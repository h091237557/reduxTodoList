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
import { createHashHistory }                          from 'history'

const db = window.localStorage;
// let path = "",pathname = "";
// if (process.env.NODE_ENV === 'production') {
//   path="/";
//   pathname = location.hash.slice(2);
// } else {
//   path="/";
//   pathname = location.pathname.slice(1);
// }

const switchVisible = (state) => {
  let pathname = location.hash.slice(2);
  switch (pathname) {
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

if( db.hasOwnProperty('mydb') == false ){
    db.setItem('mydb', JSON.stringify({ todos: [], visible: 'SHOW_ALL', routing: {locationBeforeTransitions:null} }));
}
const initState = JSON.parse(db.getItem('mydb'));
// const store = configureStore(switchVisible(initState));
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

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
