// require('../stylesheets/app.scss');
require('../scss/main.scss');
require("font-awesome-webpack");
import React, { Component }   from 'react';
import AddTodo                from './components/AddTodo';
import TodoList               from './components/TodoList';
import TodoFilter            from './components/TodoFilter';

export class App extends Component {
  render() {
    return (
      <section className="index">
        <div className="l-container">
          <div className="logo">
            <p className="logo-title">
              TODO<span className="logo-comment">beta</span>
            </p>
          </div>
          <div className="index__content">
              <TodoFilter />
              <AddTodo />
              <TodoList />
          </div>
        </div>
      </section>
    );
  }
}
