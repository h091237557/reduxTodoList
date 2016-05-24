import types                   from '../constants';
import { createAction }        from 'redux-actions';
import { push }                from 'react-router-redux';

let id = 0;
var db = window.localStorage;
const lastState = JSON.parse(db.getItem('mydb'));
console.log(lastState);
if( db.hasOwnProperty('mydb') != false ){
    let todos = lastState.todos;
    let lastTodo = todos[todos.length -1];
    id = !!lastTodo? lastTodo.id : 0;
}

export function getDbState() {
    return (dispatch,getState) => {
        const curentPath = lastState.routing.locationBeforeTransitions.hash.slice(2);
        switch (curentPath) {
          case 'Active':
              return setTimeout(() => {
                dispatch(InitTodo(lastState.todos));
                dispatch(SetVisibleTodo('SHOW_ACTIVE'));
                dispatch(push('#/'+curentPath));
              },0);
          case 'Complete':
              return setTimeout(() => {
                dispatch(InitTodo(lastState.todos));
                dispatch(SetVisibleTodo('SHOW_COMPLETE'));
                dispatch(push('#/'+curentPath));
              },0);
          case 'Starred':
              return setTimeout(() => {
                dispatch(InitTodo(lastState.todos));
                dispatch(SetVisibleTodo('SHOW_STAR'));
                dispatch(push('#/'+curentPath));
              },0);
          default:
              return setTimeout(() => {
                dispatch(InitTodo(lastState.todos));
                dispatch(SetVisibleTodo('SHOW_ALL'));
                dispatch(push('#/'+curentPath));
              },0);
        }
    }
}

export const InitTodo = createAction(types.INIT_TODO, amount => amount);

export const AddTodo = createAction(types.ADD_TODO, text => { id++; return {text,id}; });

export const EditTodo = createAction(types.EDIT_TODO, amount => amount);

export const ToggleTodo = createAction(types.TOGGLE_TODO, amount => amount);

export const DeleteTodo = createAction(types.DELETE_TODO, amount => amount);

export const UpdateTodo = createAction(types.UPDATE_TODO, amount => amount);

export const ToggleStarTodo = createAction(types.TOGGLE_STAR_TODO, amount => amount);

export const SetVisibleTodo = createAction(types.SET_VISIBLE, amount => amount);
