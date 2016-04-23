import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as TodoAction          from '../actions/';
import Todo                     from './Todo';

const TodoList = ({
  todos,
  ToggleTodo,
  UpdateTodo,
  DeleteTodo,
  ToggleStarTodo
},ownProps) => (
  <div>
    {todos.map( todo =>
      <Todo
        toggleTodo = { () => {
          ToggleTodo(todo.id);
        }}

        toggleStarTodo = { () => {
          ToggleStarTodo(todo.id);
        }}

        deleteTodo = { () =>{
          DeleteTodo(todo.id);
        }}

        textUpdate = { (nextText) => {
          UpdateTodo({text:nextText,id:todo.id});
        }}
        key = {todo.id}
        {...todo} />
    )}
  </div>
);


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

export default connect(
                    state => {
                      return {
                        todos: filter(state.todos,state.visible)
                      }
                    },
                    (dispatch) => {
                      return bindActionCreators(TodoAction, dispatch);
                    }
                )(TodoList);

