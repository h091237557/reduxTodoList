import types                   from '../constants';
import { createAction }        from 'redux-actions';
import { push }                from 'react-router-redux';

let id = 0;
var db = window.localStorage;
let lastState = null;
if( db.hasOwnProperty('mydb') != false ){
    lastState = JSON.parse(db.getItem('mydb'));
    let todos = lastState.todos;
    let lastTodo = todos[todos.length -1];
    id = !!lastTodo? lastTodo.id : 0;
}

export function getDbState() {
    return (dispatch,getState) => {
        if(lastState === null) return;
        dispatch(InitTodo(lastState.todos));
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
