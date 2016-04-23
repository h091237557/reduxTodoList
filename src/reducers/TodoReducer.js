import types  from '../constants';

function todo(state, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id:action.payload.id,
        text:action.payload.text,
        star:false,
        completed:false
      };
    case types.TOGGLE_TODO:
      if(state.id !== action.payload){
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case types.UPDATE_TODO:
      if(state.id !== action.payload.id){
        return state;
      }
      return {
        ...state,
        text: action.payload.text
      };
    case types.TOGGLE_STAR_TODO:
      if(state.id !== action.payload){
        return state;
      }
      return {
        ...state,
        star: !state.star
      };
    case types.DELETE_TODO:
      return state;
    default:
      return state;
  }
}

export default todo

