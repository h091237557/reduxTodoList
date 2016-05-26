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
          Redirect}                                   from 'react-router';
import { syncHistoryWithStore }                       from 'react-router-redux';
import * as TodoAction                                from './actions/';
import AllTodos                                       from './components/AllTodos';
import StarredTodos                                   from './components/StarredTodos';
import CompleteTodos                                  from './components/CompleteTodos';
import ActiveTodos                                    from './components/ActiveTodos';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
store.dispatch(TodoAction.getDbState());

const node = (
      <Provider store={store}>
          <Router history={history}>
             <Route path="/" component={App}>
              <IndexRoute component={AllTodos}/>
              <Route path="All" component={AllTodos}/>
              <Route path="Starred" component={StarredTodos}/>
              <Route path="Active" component={ActiveTodos}/>
              <Route path="Complete" component={CompleteTodos}/>
              {/*
              <IndexRoute component={AllTodos}/>
              <Redirect from="All" to=""/>
                <Redirect from="#/Starred" to='Starred' />
                <Redirect from="#/Active" to='Active' />
                <Redirect from="#/Complete" to='Complete' />
              */}
           </Route>
          </Router>
      </Provider>
);

ReactDOM.render(node, document.getElementById('root'));
