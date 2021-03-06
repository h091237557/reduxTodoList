import types  from '../constants';
import todo   from './TodoReducer'

function todos(state = [], action) {
  switch (action.type) {
    case types.INIT_TODO:
      return action.payload;
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined,action)
      ];
    case types.TOGGLE_TODO:
      return state.map(item => todo(item,action));
    case types.UPDATE_TODO:
      return state.map(item => todo(item,action));
    case types.TOGGLE_STAR_TODO:
      return state.map(item => todo(item,action));
    case types.EDIT_TODO:
      return state.map(item => todo(item,action));
    case types.DELETE_TODO:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default todos;

