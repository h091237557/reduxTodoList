import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import { push }                             from 'react-router-redux';
import classNames                           from 'classnames';
import AddTodo                              from '../components/AddTodo';
import TodoFilter                           from '../components/TodoFilter';
import TodoList                           from '../components/TodoList';

const filter = (todos,visible) => {
  switch (visible) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed);
    case 'SHOW_COMPLETE':
      return todos.filter( t => t.completed);
    case 'SHOW_STAR':
      return todos.filter( t => t.star);
  }
}

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <main>
            <TodoFilter {...this.props} />
            <AddTodo {...this.props} />
            {React.cloneElement(this.props.children, { ...this.props })}
          </main>
        )
    }
}
// {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}
export default connect(
                    (state,ownProps) => {
                      //     state => state
                      return {
                        todos: state.todos,
                        visible:state.visible
                      }
                    },
                    (dispatch) => {
                      return {
                        ...bindActionCreators(TodoAction, dispatch),
                        redirect (path) {
                          dispatch(push(path));
                        }
                      }
                    }
                )(Main);
