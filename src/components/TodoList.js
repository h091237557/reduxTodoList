import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as TodoAction          from '../actions/';
import Todo                     from './Todo';
import classNames               from 'classnames';

const TodoList = ({
  todos,
  ToggleTodo,
  UpdateTodo,
  DeleteTodo,
  ToggleStarTodo,
  EditTodo
},ownProps) => {
  let Todos = null;
  if(todos.length === 0){
    Todos = "Oops, You got nothing to do.";
  }else{
    Todos = todos.map( todo =>
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

                editTodo = { (nextText) => {
                  EditTodo(todo.id);
                }}

                textUpdate = { (nextText) => {
                  UpdateTodo({text:nextText,id:todo.id});
                }}
                key = {todo.id}
                {...todo} />
            ).reverse();
  }
  return (
    <ul className={classNames({ 'list': todos.length !== 0, 'list-empty': todos.length === 0})} >
      {Todos}
    </ul>);
}

export default TodoList;

