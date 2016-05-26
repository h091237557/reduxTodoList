import React, { Component, PropTypes }      from 'react';
import * as TodoAction                      from '../actions/';
import classNames                           from 'classnames';
import TodoList                             from './TodoList';

class AllTodos extends Component {
    constructor(props, context) {
        super(props, context);
    }

    state = {
    }

    render() {
        return (
          <section className="clearfix">
            <TodoList {...this.props}/>
          </section>
        )
    }
}

export default AllTodos;
