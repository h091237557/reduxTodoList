import types                   from '../constants';
import { createAction }        from 'redux-actions';

let id = 0;
var db = window.localStorage;
if( db.hasOwnProperty('mydb') != false ){
    let todos = JSON.parse(db.getItem('mydb')).todos;
    let lastTodo = todos[todos.length -1];
    id = !!lastTodo? lastTodo.id : 0;
}
export const AddTodo = createAction(types.ADD_TODO, text => { id++; return {text,id}; });

export const EditTodo = createAction(types.EDIT_TODO, amount => amount);

export const ToggleTodo = createAction(types.TOGGLE_TODO, amount => amount);

export const DeleteTodo = createAction(types.DELETE_TODO, amount => amount);

export const UpdateTodo = createAction(types.UPDATE_TODO, amount => amount);

export const ToggleStarTodo = createAction(types.TOGGLE_STAR_TODO, amount => amount);

export const SetVisibleTodo = createAction(types.SET_VISIBLE, amount => amount);
