import React, { Component, PropTypes }      from 'react';
import * as TodoAction                      from '../actions/';
import classNames                           from 'classnames';
import TodoList                             from './TodoList';

class StarredTodos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        this.props.SetVisibleTodo('SHOW_STAR');
        const todos = this.props.todos.filter( t => t.star);
        return (
          <section className="clearfix">
            <TodoList {...this.props} todos={todos}/>
          </section>
        )
    }
}

export default StarredTodos;
