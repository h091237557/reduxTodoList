import React, { Component, PropTypes }      from 'react';
import * as TodoAction                      from '../actions/';
import classNames                           from 'classnames';
import TodoList                             from './TodoList';

class AllTodos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        this.props.SetVisibleTodo('SHOW_ALL');
        return (
          <section className="clearfix">
            <TodoList {...this.props}/>
          </section>
        )
    }
}

export default AllTodos;
