require('../stylesheets/app.scss');
import React, { Component }   from 'react';
import AddTodo                from './components/AddTodo';
import TodoList               from './components/TodoList';
import Header               from './components/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
